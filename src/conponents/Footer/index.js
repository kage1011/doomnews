
import React from 'react';
import { Col, Row } from 'antd';
import { FacebookOutlined, TwitterOutlined,LinkedinOutlined} from '@ant-design/icons';
import '../Footer/style.scss';
import { Link } from "react-router-dom";
function Footer() {

  return (
    <div className='footerlayout'>
      <Row justify="center" gutter={[24, 24]}>

        <Col xs={24} sm={12} md={12} lg={12}>
          <div>
          <h6>About</h6>
            <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6}>
          <div>
          <h6>Categories</h6>
            <ul class="footer-links">
              <li>  <Link to={"#"}>News</Link></li>
              <li>  <Link to={"#"}>About us</Link></li>
              <li>  <Link to={"#"}>Contact</Link></li>

            </ul>
          </div>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6}>
          <div>
          <h6>Quick Links</h6>
            <ul class="footer-links">
              <li>  <Link to={"#"}>About Us</Link></li>
              <li>  <Link to={"#"}>Contact Us</Link></li>
              <li>  <Link to={"#"}>Contribute</Link></li>
              <li>  <Link to={"#"}>Privacy Policy</Link></li>
              <li>  <Link to={"#"}>Sitemap</Link></li>
            </ul>
          </div>
        </Col>

      </Row>
      <br/>
      <Row justify="center" gutter={[24, 24]}>

        <Col  xs={24} sm={12} md={12} lg={12}>
          <div>
          <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by
                <Link to={"#"}>{" "}Van Khai</Link>.
            </p>
          </div>
        </Col>
        <Col justify='end' xs={24} sm={12} md={12} lg={12}>
          <div>
          <ul class="social-icons">
              <li> <Link class="facebook" ><FacebookOutlined /></Link></li>
              <li> <Link class="twitter" ><TwitterOutlined /></Link></li>
              <li> <Link class="linkedin" ><LinkedinOutlined /></Link></li>
            </ul>
          </div>
        </Col>


      </Row>
  
    </div>
  );
}

export default Footer;