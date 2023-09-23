import React, { useState, useRef } from 'react';
import { View, FlatList, Text } from 'react-native';

const data = [
    {
        categoryName: "카테고리1",
        items: ["아이템1", "아이템2", "아이템2"]
    },
    {
        categoryName: "카테고리2",
        items: ["아이템3", "아이템4", "아이템3"]
    },
    {
        categoryName: "카테고리3",
        items: ["아이템5", "아이템6", "아이템5"]
    },
    {
        categoryName: "카테고리4",
        items: ["아이템7", "아이템8", "아이템7"]
    },
    {
        categoryName: "카테고리5",
        items: ["아이템9", "아이템10", "아이템9"]
    },
    {
        categoryName: "카테고리6",
        items: ["아이템11", "아이템12", "아이템11"]
    },
    {
        categoryName: "카테고리7",
        items: ["아이템13", "아이템14", "아이템13"]
    },
    {
        categoryName: "카테고리8",
        items: ["아이템15", "아이템16", "아이템15"]
    },
    ];

const MenuEdit = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems[0] && viewableItems[0].item) {
      setActiveCategory(viewableItems[0].item.categoryName);
    }
  }).current;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 50, backgroundColor: 'gray', justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', fontSize: 20 }}>{activeCategory}</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.categoryName}
        renderItem={({ item }) => (
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.categoryName}</Text>
            {item.items.map((i, index) => (
              <Text key={index}>{i}</Text>
            ))}
          </View>
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
};

export default MenuEdit;
