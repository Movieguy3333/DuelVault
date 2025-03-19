export const getUser = (req, res) => {
  res.json({ username: "Movieguy3333", password: "Eg3csWV4A" });
};
export const handlePostRequest = (req, res) => {
  console.log("Data received:", req.body);

  res.json({ message: "Data received successfully!" });
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;

  // Dummy check - replace with actual authentication logic
  if (email === "user@example.com" && password === "password123") {
    res.status(200).json({
      user: {
        name: "Muaad",
        email: email,
      },
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
