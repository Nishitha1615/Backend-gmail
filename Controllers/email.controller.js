import Email from "../Models/email.js";

export const saveSentEmail = (req, res) => {
  try {
    const email = new Email(req.body);
    email.save();
    res.status(200).json("email saved sucessfully");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getEmails = async (req, res) => {
  try {
    let emails;
    if (req.params.type==="bin") {
      emails = await Email.find({ bin:true });
    }
    else if(req.params.type==="allmail"){
      emails = await Email.find({  });
    }
    else if(req.params.type==="started"){
      emails = await Email.find({ starred:true  });
    }
    else{
        emails = await Email.find({ type: req.params.type });
    }
    return res.status(200).json(emails);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}; 

export const saveDraftEmail = (req, res) => {
    try {
      const email = new Email(req.body);
      email.save();
      res.status(200).json("email saved sucessfully");
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  export const DeleteEmails =async (req, res) => {
    try {
      await Email.updateMany({_id:{$in:req.body}},{$set:{bin:true,starred:false,type:''}});
      return res.status(200).json("email deleted sucessfully");
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  export const StarEmail =async (req, res) => {
    try {
      await Email.updateOne({_id:req.body.id},{$set:{starred:req.body.value}});
      return res.status(200).json("email is starred marked");
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  export const DeleteEmail =async (req, res) => {
    try {
      await Email.deleteMany({_id:{$in:req.body}});
      return res.status(200).json("email has been deleted");
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };