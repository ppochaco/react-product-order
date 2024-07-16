import { useState } from 'react';

import { Checkbox } from '@/components/ui/Input/Checkbox';
import { Input } from '@/components/ui/Input/Default';
import { Container } from '@/components/ui/Layout/Container';
import { Select } from '@/components/ui/Select';
import { Text } from '@/components/ui/Text';

export const CashCheckForm = () => {
  const [isCashChecked, setIsCashChecked] = useState(false);

  const handleCashCheckboxChange = () => {
    setIsCashChecked(!isCashChecked);
  };

  return (
    <Container flexDirection="column" gap="1rem">
      <Checkbox
        id="cashCheck"
        checked={isCashChecked}
        onChange={handleCashCheckboxChange}
      />
      <label htmlFor="cashCheck">
        <Text isBold>현금영수증 신청</Text>
      </label>
      <Container flexDirection="column" gap="0.5rem">
        <Select>
          <option value="개인소득공제">개인소득공제</option>
          <option value="사업자증빙용">사업자증빙용</option>
        </Select>
        <Input type="number" placeholder="(-없이) 숫자만 입력해주세요." />
      </Container>
    </Container>
  );
};
