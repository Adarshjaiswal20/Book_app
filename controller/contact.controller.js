import contact from "../model/contact.model.js";

export const Contact = async (req, res) => {
    try {
      const { name, email, message } = req.body; // Correct field names
  
      
      res.status(200).json({
        message: "Form submitted successfully",
        user: {
            
          name,
          email,
          message,
        },
      });
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  };


  