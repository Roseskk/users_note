import React from "react";
import Component from "./someComponent";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import withLogin from "./withLogin";
import withPropsStyles from "./withPropsStyles";
import withFunctions from "../../exercises/withFunctions";
import SimpleComponent from "../../exercises/simpleComponent";
const HOCExample = () => {
  const ComponentWithAuth = withLogin(Component);
  const ComponentWithPropsStyles = withPropsStyles(Component);
  const NewComponent = withPropsStyles(ComponentWithAuth);

  const MyNewComponentWithHOC = withFunctions(SimpleComponent)
  return (
    <>
      <CardWrapper>
        <SmallTitle>1. Обычный компонент</SmallTitle>
        <Divider />
        <Component />
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>2. Функциональный HOC</SmallTitle>
        <Divider />
        <ComponentWithAuth />
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>3. HOC With Styles and Props</SmallTitle>
        <ComponentWithPropsStyles />
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>4. Composed HOC</SmallTitle>
        <NewComponent />
      </CardWrapper>
        <CardWrapper>
            <SmallTitle>5. Задачка</SmallTitle>
            <MyNewComponentWithHOC />
        </CardWrapper>
    </>
  );
};

export default HOCExample;
