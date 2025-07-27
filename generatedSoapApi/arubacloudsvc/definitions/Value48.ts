import { Value31 } from "./Value31";
import { ArchitectureType } from "./ArchitectureType";
import { FeatureType } from "./FeatureType";
import { HypervisorTemplateBounds } from "./HypervisorTemplateBounds";
import { OperatingSystemFamily } from "./OperatingSystemFamily";
import { TemplateType } from "./TemplateType";

/**
 * Value
 * @targetNSAlias `q60`
 * @targetNamespace `http://schemas.datacontract.org/2004/07/Aruba.Cloud.Provisioning.Entities`
 */
export interface Value48 {
    /** ApplianceType */
    ApplianceType?: Value31;
    /** ArchitectureType */
    ArchitectureType?: ArchitectureType;
    /** FeatureType */
    FeatureType?: FeatureType;
    /** HypervisorTemplateBounds */
    HypervisorTemplateBounds?: HypervisorTemplateBounds;
    /** OperatingSystemFamily */
    OperatingSystemFamily?: OperatingSystemFamily;
    /** TemplateType */
    TemplateType?: TemplateType;
}
