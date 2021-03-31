import React from 'react';
import enTranslations from '@shopify/polaris/locales/en.json';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {AppProvider, Page, Layout, TextContainer } from '@shopify/polaris';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import './App.scss';


const TestUser = {
  name: "Mary",
  store: "thisIsATestStore.myshopify.com",
  id_number: 123213213123213,
}

function App() {
  
  return (
    <Router>
        <Switch>
          <Route path="/checklist/:id">
            <LandingPage />
          </Route>
        </Switch>
    </Router>
  );
}

function LandingPage() {
  return (
    <AppProvider i18n={enTranslations}>
      <Page narrowWidth>
        <Layout>
          <Layout.Section>
            <div className="intro">
              <TextContainer>
                <h1> Hey {TestUser.name} 👋 </h1>
              </TextContainer>

              <TextContainer>
                <p> Fancy seeing you here 💅 We've sent you a little treat that we hope will inspire you and give you the extra something to continue kicking ass 💪 </p>
                <p> In the package is a Shopify counter that will update everytime you make a sale 💸</p>
                <p> Now! Here is the twist, to get it up and running we need to take a journey together 🗺 </p>
              </TextContainer>

              <TextContainer>
                <p> What you will need: </p>
                <p> ➜ a big cup of coffee ☕ </p>
                <p> ➜ your laptop 💻 </p>
                <p> ➜ log into your shopify admin 👤 </p>
              </TextContainer>
              <TextContainer>
                <p> Are you ready? Scroll down for the deets! </p>
                <p> · </p>
                <p> · </p>
                <p> · </p>
              </TextContainer>
            </div>
          </Layout.Section>
          <Layout.Section>
            <SectionOne idNumber={TestUser.id_number}/>
          </Layout.Section>
          <Layout.Section>
            <div className="intro">
              <p> · </p>
              <p> · </p>
              <p> · </p>
            </div>
          </Layout.Section>
          <Layout.Section>
            <SectionTwo storeUrl={TestUser.store}/>
          </Layout.Section>
          <Layout.Section>
            <div className="intro">
              <p> · </p>
              <p> · </p>
              <p> · </p>
            </div>
          </Layout.Section>
          <Layout.Section>
            <SectionThree />
          </Layout.Section>
        </Layout>
      </Page>
    </AppProvider>
  );
}

export default App;
