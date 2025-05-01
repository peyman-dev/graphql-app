window.addEventListener("load", async () => {
  const res = await fetch(`https://sabzlearn-graphql.iran.liara.run/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
            query {
                categories {
                    title
                    icon
                }
            }
        `,
    }),
  });

  const response = await res.json();

  console.log("Response ->", response);
});
