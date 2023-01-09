const { v4: uuid } = require("uuid");
const { Stack } = require("../models");
const stackService = require("../service/stackService");

const getAllStacks = async (req, res) => {
  const stacks = await stackService.getAllStack();

  res.send(stacks);
};

const getStackByUuid = async (req, res) => {
  try {
    const { uuid } = req.params;

    const stack = await stackService.getStackByUuid(uuid);

    res.send(stack);
  } catch (err) {
    res.sendStatus(403);
  }
};

const createStack = async (req, res) => {
  try {
    const { stackName, iconLink } = req.body;

    const stack = await Stack.create({
      uuid: uuid(),
      stack_name: stackName,
      icon_link: iconLink,
    });

    res.send(stack);
  } catch (err) {
    res.sendStatus(403);
  }
};

const updateStack = async (req, res) => {
  try {
    const { uuid } = req.params;
    const { stackName, iconLink } = req.body;

    const oldStack = await stackService.getStackByUuid(uuid);
    oldStack.stack_name = stackName;
    oldStack.icon_link = iconLink;
    const newStack = await oldStack.save();

    res.send(newStack);
  } catch (err) {
    res.sendStatus(403);
  }
};

const deleteStack = async (req, res) => {
  try {
    const { uuid } = req.params;

    await Stack.delete({ where: { uuid } });

    res.send("Stack deleted successfully");
  } catch (err) {
    res.sendStatus(403);
  }
};

module.exports = {
  getAllStacks,
  getStackByUuid,
  createStack,
  updateStack,
  deleteStack,
};
