import { SomeFeaturesWantToBeReusedWithRenderProps } from "./renderProps";

export function RenderPropsExample1() {
  return (
    <SomeFeaturesWantToBeReusedWithRenderProps>
      {({ add, minus, count }) => {
        return (
          <div>
            {count}
            <button onClick={add}>add</button>
          </div>
        );
      }}
    </SomeFeaturesWantToBeReusedWithRenderProps>
  );
}

export function RenderPropsExample2() {
  return (
    <SomeFeaturesWantToBeReusedWithRenderProps
      renderContent={({ add, count }) => {
        return (
          <div>
            {count}
            <button onClick={add}>add</button>
          </div>
        );
      }}
    />
  );
}
