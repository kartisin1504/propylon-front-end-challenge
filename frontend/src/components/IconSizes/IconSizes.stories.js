import { IconSizes } from ".";

export default {
  title: "Components/IconSizes",
  component: IconSizes,
  argTypes: {
    size: {
      options: ["large", "inherit", "medium", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "large",
    className: {},
  },
};
