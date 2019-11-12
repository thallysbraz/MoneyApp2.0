import React, { Component } from "react";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabHeader";
import TabsContent from "../common/tab/tabContent";

class BillingCycle extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Ciclos de Pagamento" small="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader></TabsHeader>
            <TabsContent></TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

export default BillingCycle;
