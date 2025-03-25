

import Welcome from "@/components/portal/main/Welcom"
import "./pageCss/page.css"
import "./pageCss/page.media.css"
import MyModules from "@/components/portal/main/MyModules"
import EveryDayPractic from "@/components/portal/main/EveryDayPractic"
import LeadersBoard from "@/components/portal/main/LeadersBoard"


export default function Portal() {
    
    return (
        <div className="indexPortal">
            <Welcome />
            <MyModules />
            <EveryDayPractic />
            <LeadersBoard />
        </div>
    )
}