import React, { useEffect } from 'react';
import { Input, Select, Form } from 'antd';
import styles from './styles.less';

const { Option } = Select;
const PhoneNumber = (props) => {
  const { name, rules, countryCode } = props;

  // added the event listener to stop incrementing number field on mouse scroll event,
  // removed that event listener when component is unmounted
  useEffect(() => {
    // eslint-disable-next-line func-names
    const eventListener = document.addEventListener('wheel', function () {
      if (
        document.activeElement.type === 'number' &&
        document.activeElement.classList.contains('noscroll')
      ) {
        document.activeElement.blur();
      }
    });
    return () => {
      document.removeEventListener('wheel', eventListener);
    };
  }, []);

  return (
    <Input.Group compact className={styles.container}>
      <Form.Item initialValue="+44" name={countryCode} noStyle>
        <Select size="large" style={{ width: '30%' }} defaultValue="+61">
          <Option value="+61">AUS (+61)</Option>
          <Option value="+64">NZ (+64)</Option>
        </Select>
      </Form.Item>
      <Form.Item name={name} rules={rules} noStyle>
        <Input
          type="number"
          style={{ width: '70%' }}
          size="large"
          {...props}
          maxLength={10}
          className="noscroll"
        />
      </Form.Item>
    </Input.Group>
  );
};

export default PhoneNumber;
