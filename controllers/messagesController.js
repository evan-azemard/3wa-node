import Message from "../models/Message.js";

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    if (!messages.length) {
      return res.json({ message: "Messages not found" });
    }
    return res.json(messages);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const createMessage = async (req, res) => {
  const { id, message } = req.body;
  try {
    const newMessage = new Message({
      user_id: id,
      message,
    });

    newMessage.save();
    return res.status(201).json({ newMessage });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getMessageByUserId = async (req, res) => {
  const { user_id } = req.params;

  try {
    const messages = await Message.find({ user_id });

    if (!messages.length) {
      return res
        .status(404)
        .json({ message: "No messages found for this user" });
    }

    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateMessage = async (req, res) => {
  const { message } = req.body;

  try {
    const updatedMessage = await Message.findByIdAndUpdate(
      req.params.id,
      { message: message },
      { new: true }
    );
    if (!updatedMessage)
      return res.status(404).json({ error: "Message not found" });

    return res.json({ updatedMessage });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteMessage = async (req, res) => {
  const { id } = req.params;
  try {

    await Message.deleteOne({ _id: id });
    return res.status(203).json({ message: "Message has been deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

