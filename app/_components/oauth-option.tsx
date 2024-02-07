import { OAuthProvider } from "@/typings";
import * as React from "react";

export interface IOAuthOptionProps {
  key: any;
  provider: OAuthProvider;
}

export default function OAuthOption(props: IOAuthOptionProps) {
  return (
    <div>
      <h1>OAuthOption</h1>
    </div>
  );
}
