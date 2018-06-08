
import React, { Component } from 'react';

type IgnoreProps = {
  msg: string,
  bar?: string,
};

/**约束state***/
type State={
  name:string,
  age:number,
  idcard:string
}

class IgnoreTest extends Component<IgnoreProps,State> {
  constructor(props: any){
    super(props);
    this.state={
      name:"dengyaowen",
      age:22,
      idcard:"null"
    };
  }
  render() {
    return (
      <div className="testignore">
        Test Ignore {this.props.msg}
      </div>
    );
  }
}

export default IgnoreTest;
