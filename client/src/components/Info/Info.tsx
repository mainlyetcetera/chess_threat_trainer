import React, { useState }  from 'react';

type InfoProps = {
  info: string;
}

const Info = (props: InfoProps): JSX.Element => {
  const [info, setInfo] = useState(props.info)

  return <h3>{ info }</h3>;
};

export default Info
