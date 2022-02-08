import * as React from "react";
import { ScrollView } from "native-base";

import Container from "@components/common/Container";
import Error from "@components/feedback/Error";

const NotFoundScreen = () => {
  return (
    <Container>
      <ScrollView>
        <Error type="400" />
      </ScrollView>
    </Container>
  );
};

export default NotFoundScreen;
