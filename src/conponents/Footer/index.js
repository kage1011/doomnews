
import React from 'react';
import { Col, Row } from 'antd';
import { FacebookOutlined, TwitterOutlined,LinkedinOutlined} from '@ant-design/icons';
import '../Footer/style.scss';
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
              <li><a href="#">C</a></li>
              <li><a href="#">UI Design</a></li>
              <li><a href="#">PHP</a></li>
              <li><a href="#">Java</a></li>
              <li><a href="#">Android</a></li>
              <li><a href="#">Templates</a></li>
            </ul>
          </div>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6}>
          <div>
          <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Contribute</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </Col>

      </Row>
      <Row justify="center" gutter={[24, 24]}>

        <Col  xs={24} sm={12} md={12} lg={12}>
          <div>
          <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by
              <a href="#">VanKhai</a>.
            </p>
          </div>
        </Col>
        <Col justify='end' xs={24} sm={12} md={12} lg={12}>
          <div>
          <ul class="social-icons">
              <li><a class="facebook" href="#"><FacebookOutlined /></a></li>
              <li><a class="twitter" href="#"><TwitterOutlined /></a></li>
              <li><a class="linkedin" href="#"><LinkedinOutlined /></a></li>
            </ul>
          </div>
        </Col>


      </Row>
  
    </div>
  );
}

export default Footer;