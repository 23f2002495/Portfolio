export async function GET() {
  try {
    const username = "rwmi";

    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
          }
        `,
        variables: { username },
      }),
    });

    const data = await res.json();

    const stats = data.data.matchedUser.submitStats.acSubmissionNum;

    return Response.json({
      easy: stats.find(s => s.difficulty === "Easy")?.count || 0,
      medium: stats.find(s => s.difficulty === "Medium")?.count || 0,
      hard: stats.find(s => s.difficulty === "Hard")?.count || 0,
    });

  } catch (error) {
    return Response.json({ error: "Failed to fetch LeetCode stats" });
  }
}