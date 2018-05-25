// Auto-generated. Do not edit.


    /**
     * share
     * use
     */
    //% color=243 weight=100 icon="\uf0c2" block="Cloud Variables"
declare namespace cloudvariables {

    /**
     * do some stuff
     */
    //% help=none
    //% weight=96
    //% blockId=share-strict block="share|%variable|with %PERMISSIONS" blockGap=8
    //% PERMISSIONS.fieldEditor="gridpicker" PERMISSIONS.fieldOptions.columns=4 shim=cloudvariables::shareVariable
    function shareVariable(variableName: string, l: Locations): void;

    /**
     * do some stuff
     */
    //% help=none
    //% weight=96
    //% blockId=share-freeform block="share|%variable|with %whom" blockGap=8 shim=cloudvariables::shareVariableFree
    function shareVariableFree(variableName: string, whom: string): void;

    /**
     * do some stuff
     */
    //% help=none
    //% weight=96
    //% blockId=set_shared block="set|%variable|to %value" blockGap=8 shim=cloudvariables::setSharedVariable
    function setSharedVariable(variableName: string, value: string): void;

    /**
     * do some stuff
     */
    //% help=none
    //% weight=96
    //% blockId=get_value_shared block="get|value of %variable" blockGap=8 shim=cloudvariables::getSharedVariable
    function getSharedVariable(variableName: string): string;

    /**
     * do some stuff
     */
    //% help=none
    //% weight=96
    //% blockId=on_variable_changed block="on|%variable|changed" blockGap=8 shim=cloudvariables::onVariableChanged
    function onVariableChanged(variableName: string, body: () => void): void;
}

// Auto-generated. Do not edit. Really.
