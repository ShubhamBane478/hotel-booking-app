// @ts-nocheck
import icons from '@/lib/icon';

const Icon    = ({icon  , ...props})=>{

    const IconComponent = icons[icon]
    return (
        <IconComponent {...props} />
    )
}

export default Icon;
