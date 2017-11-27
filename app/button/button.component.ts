import { Input, Output, EventEmitter, Component, AfterViewInit } from '@angular/core';
import { BUTTON_STATES } from './button.model';

@Component({
    selector: 'ed-button',
    moduleId: module.id,
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent implements AfterViewInit {
    @Input() public text: string = '';
    @Input() public busyText: string = '';
    @Input() public successText: string = '';
    @Input() public disabledText: string = '';
    @Input() public confirmText: string = '';
    @Input() public automationText: string = '';
    @Input() public tapOnSuccess: boolean = false;
    @Input() public col: number = 0;
    @Input() public row: number = 0;
    @Input() public indicatorCol: number = 0;
    @Input() public isInverseButton: boolean = false;
    @Input() public showCheckMark: boolean = false;

    @Output() public tap: EventEmitter<Event> = new EventEmitter<Event>();

    public displayText: string = '';

    private _buttonState: BUTTON_STATES = BUTTON_STATES.ENABLED;
    private disabledStates: Array<BUTTON_STATES> = [
        BUTTON_STATES.BUSY,
        BUTTON_STATES.DISABLED,
        BUTTON_STATES.SUCCESS
    ];

    public ngAfterViewInit(): void {
        setTimeout(() => {
            this.displayText = this.text;
        }, 10);
    }

    @Input()
    public set buttonState(state: BUTTON_STATES) {
        if (this._buttonState !== state) {
            this._buttonState = state;
            switch (state) {
                case BUTTON_STATES.BUSY:
                    this.setBusyState();
                    break;
                case BUTTON_STATES.CONFIRM:
                    this.setConfirmState();
                    break;
                case BUTTON_STATES.DISABLED:
                    this.setDisabledState();
                    break;
                case BUTTON_STATES.SUCCESS:
                    this.setSuccessState();
                    break;
                case BUTTON_STATES.ENABLED:
                    this.setDefaultState();
                    break;
                default:
                // throw new Error(state + ' is not implemented for EDButtonComponent');
            }
        }
    }

    public get isButtonStateBusy(): boolean {
        return this._buttonState === BUTTON_STATES.BUSY;
    }

    public get isButtonStateConfirm(): boolean {
        return this._buttonState === BUTTON_STATES.CONFIRM;
    }

    public get isButtonStateDisabled(): boolean {
        return this._buttonState === BUTTON_STATES.DISABLED;
    }

    public get isButtonStateSuccess(): boolean {
        return this._buttonState === BUTTON_STATES.SUCCESS;
    }

    public get isEnabled(): boolean {
        return this.disabledStates.indexOf(this._buttonState) === -1 || this.enabledInSuccessState();
    }

    public get buttonNeedsCheckMark(): boolean {
        return this.isButtonStateSuccess || this.showCheckMark;
    }

    public doTap(event: Event): void {
        if (this.isEnabled) {
            this.tap.emit(event);
        }
    }

    private setBusyState(): void {
        this.displayText = this.busyText ? this.busyText : this.text;
    }

    private setConfirmState(): void {
        this.displayText = this.confirmText ? this.confirmText : this.text;
    }

    private setDisabledState(): void {
        this.displayText = this.disabledText ? this.disabledText : this.text;
    }

    private setSuccessState(): void {
        this.displayText = this.successText ? this.successText : this.text;
    }

    private setDefaultState(): void {
        this.displayText = this.text;
    }

    private enabledInSuccessState(): boolean {
        return this._buttonState === BUTTON_STATES.SUCCESS && this.tapOnSuccess;
    }
}
