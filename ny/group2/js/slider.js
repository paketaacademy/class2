import { NEWS_LIST } from "./mockupForNews";

const mockToImages = NEWS_LIST

export const slider = () => {
    mockToImages.map(m => (
        m.liveUpdatesImages.map(l => (
            console.log(l.imageToUpdate)
        ))
    ))
}
