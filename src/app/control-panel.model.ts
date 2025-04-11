export class ControlPanel {

    public date: string;
    public sTrialsAmount: string;
    public sDtq1: string;
    public sDtq2: string;
    public sDtq3: string;
    public nQuant: number;
    public nTrialsAmount: number;
    public nDtq1: number;
    public nDtq2: number;
    public nDtq3: number;
    public invalidTrialsAmount: boolean;
    public invalidDtq1: boolean;
    public invalidDtq2: boolean;
    public invalidDtq3: boolean;
    public errorMessage: string;

    constructor (errorMessage: string)
    {
        errorMessage = "No";
    }
}