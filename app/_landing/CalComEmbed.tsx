"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export function CalComEmbed() {
	useEffect(()=>{
        (async function () {
		const cal = await getCalApi({});
		cal("ui", {"styles":{"branding":{"brandColor":"#1a8441"}},"hideEventTypeDetails":false,"layout":"month_view"});
        })();
	}, [])
	return <Cal
	calLink="squach90/cal-with-squach90"
	style={{width:"100%",height:"100%",overflow:"scroll"}}
	config={{layout: 'month_view'}}
	/>;
};
