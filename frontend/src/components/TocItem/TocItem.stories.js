import { TocItem } from ".";

export default {
  title: "Components/TocItem",
  component: TocItem,
  argTypes: {
    state: {
      options: ["focused", "hover", "selected", "default"],
      control: { type: "select" },
    },
    type: {
      options: ["folder", "l-c-doc", "document", "heading"],
      control: { type: "select" },
    },
    level: {
      options: ["two", "four", "three", "one"],
      control: { type: "select" },
    },
    toggleState: {
      options: ["closed", "open"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    hasChildren: true,
    chkdOutContent: true,
    state: "focused",
    type: "folder",
    level: "two",
    toggleState: "closed",
    className: {},
    lineClassName: {},
    text: "Item",
    containerClassName: {},
    line: "https://c.animaapp.com/JwISsgBl/img/line-1-168.svg",
    chevronClassName: {},
    img: "https://c.animaapp.com/JwISsgBl/img/line-1-199.svg",
  },
};
