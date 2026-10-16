import type {ReactNode} from "react";

export type RenderContentType = {
    isFetching: boolean
    description: string | null
    isResultData: boolean
    children: ReactNode

}