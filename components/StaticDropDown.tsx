import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

interface Props {
  options: string[];
  onSelectItem: any;
  selected: string;
}

export function StaticDropDown({ options, onSelectItem, selected }: Props) {
  const [open, setOpen] = useState(false);
  const values = options.map((option) => ({ value: option, label: option }));
  const [value, setValues] = useState(selected);

  return (
    <View>
      <DropDownPicker
        open={open}
        setOpen={setOpen}
        value={value}
        setValue={setValues}
        items={values}
        onSelectItem={(item) => onSelectItem(item.value)}
      />
    </View>
  );
}
