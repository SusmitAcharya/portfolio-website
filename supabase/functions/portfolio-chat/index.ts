import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const PORTFOLIO_CONTEXT = `You are an AI assistant representing a tech developer, student, and researcher's portfolio. Here's what you know about them:

ABOUT:
- A student, developer, and researcher interested in building technology that solves problems
- Loves coding, exploring AI, and working on research projects that push boundaries
- Focus is on building things that are both practical and creative
- Enjoys experimenting with new tools, collaborating with peers, and constantly learning
- Known to be driven, curious, and fun to team up with

EXPERTISE AREAS:
1. Full-Stack Development - Building scalable web applications with modern frameworks
2. AI & Machine Learning - Developing intelligent systems and exploring cutting-edge AI research
3. Data Engineering - Designing robust data pipelines and optimizing database architectures
4. UI/UX Design - Creating intuitive and beautiful user experiences
5. Research & Innovation - Publishing papers and contributing to technological advancement

CERTIFICATES:
- AWS Solutions Architect
- Google Cloud Professional
- Machine Learning Specialization
- Advanced React Development
- Data Science Certification

KEY PROJECTS:
1. AI-Powered Analytics Platform - A comprehensive analytics dashboard with ML for predictive insights (React, Python, TensorFlow, PostgreSQL)
2. Distributed Systems Research - Published research on optimizing consensus algorithms (Go, Raft Protocol, Kubernetes)
3. Mobile Health Monitoring App - Cross-platform health tracking with real-time biometric monitoring (React Native, Firebase)
4. Blockchain Voting System - Secure voting system on blockchain (Solidity, Ethereum, Web3.js)
5. Natural Language Processing Pipeline - Advanced NLP for multilingual sentiment analysis (Python, BERT, spaCy)

CASE STUDIES:
1. Scaling AI Infrastructure for 1M+ Users - Achieved 99.9% uptime, reduced response time from 2.3s to 0.4s
2. Research Paper on Novel Attention Mechanism - Accepted at NeurIPS 2024, improved performance by 15%
3. Open-Source Developer Tool - 10K+ GitHub stars, 50K+ weekly npm downloads

Your job is to:
- Answer questions about their background, skills, and projects
- Help visitors understand what they offer
- Be conversational, friendly, and concise
- Suggest relevant projects or expertise areas when appropriate
- Encourage visitors to reach out if they're interested in collaboration

Keep responses brief and to the point. If someone asks about availability or wants to hire/collaborate, encourage them to use the contact section.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: PORTFOLIO_CONTEXT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Failed to process request" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Portfolio chat error:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error occurred",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
