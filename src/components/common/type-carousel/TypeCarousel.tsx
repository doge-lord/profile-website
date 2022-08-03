import { FC, Fragment, PropsWithChildren } from "react";
import { styled } from "@mui/material/styles";
import Typist from "react-typist-component";

type Props = {
  phrases: Array<string>;
} & PropsWithChildren;

const Cursor = styled("span")({ fontWeight: 400 });

const TypeCarousel: FC<Props> = ({ children, phrases }) => {
  return (
    <>
      {children}
      <Typist
        typingDelay={75}
        backspaceDelay={25}
        cursor={<Cursor>_</Cursor>}
        loop
      >
        {phrases.map((phrase) => (
          <Fragment key={phrase}>
            {phrase}
            <Typist.Delay ms={2000} />
            <Typist.Backspace count={phrase.length} />
            <Typist.Delay ms={500} />
          </Fragment>
        ))}
      </Typist>
    </>
  );
};

export default TypeCarousel;
