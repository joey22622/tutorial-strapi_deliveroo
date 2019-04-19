/* pages/index.js */
import { Button, Alert } from "reactstrap";
import Layout from "../components/Layout";

export default () => {  
  return (
    <Layout>
      <div>
        <Alert color="primary">
          Hello Project is strapi-next with Bootstrap asdfasdf
        </Alert>
        &nbsp; <Button color="primary">Hello from nextjs</Button>
      </div>
    </Layout>
  );
};