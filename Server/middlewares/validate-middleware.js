// await schema.parseAsync(req.body)  is the line where you used zod to validate the request body against the defined schema.

// ye jo parameter me [schema == signupSchema ] hai
const Validate = (schema) => async (req, res, next) => {
  try {
    // jo bhi data (req.body) me user ne jo bhi data fill kiya hai wo [schema = signupSchema] se match ho raha kya nhi
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    res.status(400).json({ msg: "error parsing & validation failed",  });
  }
};

module.exports = Validate;  
