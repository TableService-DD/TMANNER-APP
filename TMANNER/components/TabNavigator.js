import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import categories from '../assets/data/data';

const MenuEdit = () => {
    const [currentCategory, setCurrentCategory] = useState(categories[0].name);

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50
    });

    const handleViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems && viewableItems.length > 0) {
            const firstVisibleItem = viewableItems[0].item;
            setCurrentCategory(firstVisibleItem.name);
        }
    });

    const renderItem = ({ item }) => (
        <View style={styles.menuItemContainer}>
            <Image source={item.image} style={styles.menuImage} />
            <View style={styles.menuDetail}>
                <Text>{item.menuName}</Text>
                <Text>{item.price}</Text>
                {item.status ? <Text>판매중</Text> : <Text>품절</Text>}
            </View>
        </View>
    );

    const renderHeader = ({ section: { name } }) => (
        <View style={styles.categoryHeader}>
            <Text style={styles.categoryHeaderText}>{name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.navigator}>
                <Text style={styles.navigatorText}>{currentCategory}</Text>
            </View>
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                    <View>
                        {renderHeader({ section: item })}
                        {item.content.map(menuItem => renderItem({ item: menuItem }))}
                    </View>
                )}
                keyExtractor={(item) => item.id}
                onViewableItemsChanged={handleViewableItemsChanged.current}
                viewabilityConfig={viewabilityConfig.current}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    nameStyle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    divider: {
        height: 1,
        backgroundColor: 'grey',
        marginVertical: 10,
    },
    menuItemContainer: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    menuImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    menuDetail: {
        flex: 1,
    },
    editIcon: {
        width: 30,
        height: 30,
        marginLeft: 10
    }
});
