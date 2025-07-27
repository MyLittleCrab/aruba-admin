
/**
 * News
 * @targetNSAlias `tns`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface News {
    /** NewsCategoryTypes|xs:string|Success,Info,Error,Alert */
    Category?: string;
    /** xs:string */
    MessageText?: string;
    /** xs:int */
    NewsID?: number;
    /** NewsPriorityTypes|xs:string|High,Medium,Low */
    Priority?: string;
    /** NewsSenderTypes|xs:string|Operator,SystemEvent */
    Sender?: string;
    /** xs:dateTime */
    StartDate?: Date;
}
