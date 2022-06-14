import React from "react";

export function createComponentTemplate(ComponentClass) {
  // eslint-disable-next-line react/display-name
  return (args) => <ComponentClass {...args} />;
}

export function createStoryMetaSettings({ component, enumPropNamesArray }) {
  const argTypes = {};

  enumPropNamesArray?.forEach((prop) => {
    let enumName;

    if (prop instanceof Object) {
      enumName = prop.enumName;
      prop = prop.propName;
    } else {
      enumName = `${prop}s`;
    }

    const enums = component[enumName];

    if (enums && enums instanceof Object) {
      argTypes[prop] = {
        options: Object.values(enums),
      };
    }
  });

  return { argTypes };
}
