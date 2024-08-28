import HomePageItem from './HomePageItem';

const HomePageList = ({ items, className }) => {

    return (
        <section className={className}>
            {items.map((item, index) => (
                <HomePageItem key={index} {...item} />
            ))}
        </section>
    );
};

export default HomePageList;