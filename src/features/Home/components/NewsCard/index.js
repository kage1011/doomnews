import React from 'react';
import './style.scss';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;

function NewsCard(props) {
    const {title,text,image,newsId} = props
    const negative = useNavigate();
    // const { pathname } = useLocation();
    const handleOnClick =()=>{
        negative(`/${newsId}`);
    }
    return (
        <Card className='card'
            onClick={handleOnClick}
            hoverable
            style={{
                width: 250,
            }}
            cover={<img className='card-image' alt="example" src={image} />}
        >
            <Meta title={title} description={text} />
        </Card>

    );
}
NewsCard.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string,
  };
NewsCard.defaultProps = {
    id:'',
    title: '',
    text: '',
    image: '',
  };

export default NewsCard;