import { Header } from '../Header/Header';
import { Gallery } from '../Gallery/Gallery';
import { Implementation } from '../Implementation/Implementation';
import { Demo } from '../Demo/Demo';
import { Pricing } from '../Pricing/Pricing';
import { AppContext } from '../../context';
import { useContext, useEffect } from 'react';

function NormalPage() {

    const { scrollToPricing, setScrollToPricing } = useContext(AppContext);

    useEffect(() => {
        if (scrollToPricing) {
            const xd = document.getElementById('pricingSection');
            if (xd) {
                xd.scrollIntoView({ behavior: 'smooth' });
            }
            setScrollToPricing(false);
        }
    }, [scrollToPricing]);

    return (
        <>
            <Header />
            <Gallery />
            <Implementation />
            <Demo />
            <Pricing />
        </>
    )
}

export { NormalPage }