// @ts-nocheck
import { FormControlConfig } from '@rxweb/reactive-dynamic-forms';

export class UserModel extends FormControlConfig {
    constructor(fieldConfig: { [key: string]: any },
                public controlsConfig: { [key: string]: FormControlConfig },
                notificationId: number,
                private component: ComponentClickEvent) {
        super(fieldConfig, controlsConfig, notificationId);
    }

    hooks: Hooks = {
        postValue: () => {

        }
    };

    base_back(): void {
        if (this.controlsConfig.base_back_btn.config.tier === 2){

            this.controlsConfig.base_back_btn.config.tier = 1;

            if (this.controlsConfig.base_roofline_title.hide === false) {
                this.base_reset();
                this.base_tier1();
            }
            if (this.controlsConfig.base_dwelling_title.hide === false) {
                this.base_reset();
                this.base_tier1();
            }
            if (this.controlsConfig.base_propspec_title.hide === false) {
                this.base_reset();
                this.base_tier1();
            }
        }
    }

    base_tier1(): void {
        this.controlsConfig.base_title.hide = false;

        this.controlsConfig.base_dwelling_btn.hide = false;
        this.controlsConfig.base_propspec_btn.hide = false;
        this.controlsConfig.base_roofline_btn.hide = false;
    }

    base_roofline_tier2(): void {
        this.controlsConfig.base_back_btn.hide = false;
        this.controlsConfig.base_roofline_title.hide = false;

        this.controlsConfig.base_roofline_add_btn.hide = false;
    }

    base_dwelling_tier2(): void {
        this.controlsConfig.base_back_btn.hide = false;
        this.controlsConfig.base_dwelling_title.hide = false;

        this.controlsConfig.base_dwelling_frontview_btn.hide = false;
        this.controlsConfig.base_dwelling_backview_btn.hide = false;
        this.controlsConfig.base_dwelling_rightview_btn.hide = false;
        this.controlsConfig.base_dwelling_leftview_btn.hide = false;
    }

    base_hazard_tier2(): void {
        this.controlsConfig.base_back_btn.hide = false;
        this.controlsConfig.base_propspec_title.hide = false;

        this.controlsConfig.base_propspec_add_btn.hide = false;
        this.controlsConfig.base_propspec_add_details.hide = false;
    }

    base_reset(): void {

        this.controlsConfig.base_back_btn.hide = true;

        this.controlsConfig.base_title.hide = true;
        this.controlsConfig.base_roofline_title.hide = true;
        this.controlsConfig.base_dwelling_title.hide = true;
        this.controlsConfig.base_propspec_title.hide = true;

        this.controlsConfig.base_roofline_btn.hide = true;
        this.controlsConfig.base_dwelling_btn.hide = true;
        this.controlsConfig.base_propspec_btn.hide = true;

        this.controlsConfig.base_roofline_add_btn.hide = true;

        this.controlsConfig.base_dwelling_frontview_btn.hide = true;
        this.controlsConfig.base_dwelling_backview_btn.hide = true;
        this.controlsConfig.base_dwelling_rightview_btn.hide = true;
        this.controlsConfig.base_dwelling_leftview_btn.hide = true;

        this.controlsConfig.base_propspec_add_btn.hide = true;
        this.controlsConfig.base_propspec_add_details.hide = true;
    }

    base_roofline(): void {
        this.controlsConfig.base_roofline_btn.value = 'test';
        if (this.controlsConfig.base_roofline_btn.value === '' || this.controlsConfig.base_roofline_btn.value === undefined) {
            this.btnClick(this.controlsConfig.base_roofline_btn.config.name);
        }
        else {
            this.controlsConfig.base_back_btn.config.tier = 2;

            this.base_reset();
            this.base_roofline_tier2();
        }
    }

    base_dwelling(): void {
        this.controlsConfig.base_back_btn.config.tier = 2;
        this.base_reset();
        this.base_dwelling_tier2();
    }

    base_propspec(): void {
        this.controlsConfig.base_back_btn.config.tier = 2;
        this.base_reset();
        this.base_hazard_tier2();

        if (this.controlsConfig.base_propspec_add_details.value === '' ||
            this.controlsConfig.base_propspec_add_details.value === undefined) {
            this.controlsConfig.base_propspec_add_details.description = 'Add Comments';
        }
        else {
            this.controlsConfig.base_propspec_add_details.description = 'Edit Comments';
        }
    }

    base_propspec_add(): void {
        this.btnClick(this.controlsConfig.base_propspec_add_btn.config.name);
    }

    base_propspec_add_details(): void {
        this.component.openCommentDialog(this.controlsConfig.base_propspec_add_details.config.name);
    }

    base_roofline_add(): void {
        this.btnClick(this.controlsConfig.base_roofline_btn.config.name);
    }

    base_dwelling_frontview(): void {
        this.btnClick(this.controlsConfig.base_dwelling_frontview_btn.config.name);
    }

    base_dwelling_backview(): void {
        this.btnClick(this.controlsConfig.base_dwelling_backview_btn.config.name);
    }

    base_dwelling_rightview(): void {
        this.btnClick(this.controlsConfig.base_dwelling_rightview_btn.config.name);
    }

    base_dwelling_leftview(): void {
        this.btnClick(this.controlsConfig.base_dwelling_leftview_btn.config.name);
    }

    btnDriveway(): void {
        this.btnClick(this.controlsConfig.btnDriveway.config.name);
    }

    btnFoundation(): void {
        this.btnClick(this.controlsConfig.btnFoundation.config.name);
    }

    btnSidewalks(): void {
        this.btnClick(this.controlsConfig.btnSidewalks.config.name);
    }

    btnPorches(): void {
        this.btnClick(this.controlsConfig.btnPorches.config.name);
    }

    btnStairs(): void {
        this.btnClick(this.controlsConfig.btnStairs.config.name);
    }

    btnTrees(): void {
        this.btnClick(this.controlsConfig.btnTrees.config.name);
    }

    btnChimney(): void {
        this.btnClick(this.controlsConfig.btnChimney.config.name);
    }

    btnFence(): void {
        this.btnClick(this.controlsConfig.btnFence.config.name);
    }

    btnSiding(): void {
        this.btnClick(this.controlsConfig.btnSiding.config.name);

    }

    btnGutters(): void {
        this.btnClick(this.controlsConfig.btnGutters.config.name);

    }

    btnYard(): void {
        this.btnClick(this.controlsConfig.btnYard.config.name);

    }

    plumbing_tier1(): void {
        this.controlsConfig.plumbing_title.hide = false;
        this.controlsConfig.plumbing_control_add_btn.hide = false;

        this.controlsConfig.plumbing_kitchen_btn.hide = false;
        if (this.controlsConfig.plumbing_kitchen2_btn.config.enabled === true) {
            this.controlsConfig.plumbing_kitchen2_btn.hide = false;
        }
        if (this.controlsConfig.plumbing_kitchen3_btn.config.enabled === true) {
            this.controlsConfig.plumbing_kitchen3_btn.hide = false;
        }
        if (this.controlsConfig.plumbing_kitchen4_btn.config.enabled === true) {
            this.controlsConfig.plumbing_kitchen4_btn.hide = false;
        }
        if (this.controlsConfig.plumbing_kitchen5_btn.config.enabled === true) {
            this.controlsConfig.plumbing_kitchen5_btn.hide = false;
        }

        this.controlsConfig.plumbing_bathroom_btn.hide = false;
        if (this.controlsConfig.plumbing_bathroom2_btn.config.enabled === true) {
            this.controlsConfig.plumbing_bathroom2_btn.hide = false;
        }
        if (this.controlsConfig.plumbing_bathroom3_btn.config.enabled === true) {
            this.controlsConfig.plumbing_bathroom3_btn.hide = false;
        }
        if (this.controlsConfig.plumbing_bathroom4_btn.config.enabled === true) {
            this.controlsConfig.plumbing_bathroom4_btn.hide = false;
        }
        if (this.controlsConfig.plumbing_bathroom5_btn.config.enabled === true) {
            this.controlsConfig.plumbing_bathroom5_btn.hide = false;
        }

        this.controlsConfig.plumbing_wmhose_btn.hide = false;
        this.controlsConfig.plumbing_heater_btn.hide = false;
        this.controlsConfig.plumbing_activeleaks_btn.hide = false;
        this.controlsConfig.plumbing_priorleaks_btn.hide = false;
        this.controlsConfig.plumbing_dishwasher_btn.hide = false;
        this.controlsConfig.plumbing_addComments_btn.hide = false;
    }

    plumbing_reset(): void {
        this.controlsConfig.plumbing_title.hide = true;
        this.controlsConfig.plumbing_kitchen_title.hide = true;
        this.controlsConfig.plumbing_bathroom_title.hide = true;

        this.controlsConfig.plumbing_control_add_btn.hide = true;

        this.controlsConfig.plumbing_kitchen_btn.hide = true;
        this.controlsConfig.plumbing_kitchensink_btn.hide = true;

        this.controlsConfig.plumbing_kitchen2_btn.hide = true;
        this.controlsConfig.plumbing_kitchensink2_btn.hide = true;

        this.controlsConfig.plumbing_kitchen3_btn.hide = true;
        this.controlsConfig.plumbing_kitchensink3_btn.hide = true;

        this.controlsConfig.plumbing_kitchen4_btn.hide = true;
        this.controlsConfig.plumbing_kitchensink4_btn.hide = true;

        this.controlsConfig.plumbing_kitchen5_btn.hide = true;
        this.controlsConfig.plumbing_kitchensink5_btn.hide = true;

        this.controlsConfig.plumbing_bathroom_btn.hide = true;
        this.controlsConfig.plumbing_bathroomsink_btn.hide = true;
        this.controlsConfig.plumbing_bathtub_btn.hide = true;

        this.controlsConfig.plumbing_bathroom2_btn.hide = true;
        this.controlsConfig.plumbing_bathroomsink2_btn.hide = true;
        this.controlsConfig.plumbing_bathtub2_btn.hide = true;

        this.controlsConfig.plumbing_bathroom3_btn.hide = true;
        this.controlsConfig.plumbing_bathroomsink3_btn.hide = true;
        this.controlsConfig.plumbing_bathtub3_btn.hide = true;

        this.controlsConfig.plumbing_bathroom4_btn.hide = true;
        this.controlsConfig.plumbing_bathroomsink4_btn.hide = true;
        this.controlsConfig.plumbing_bathtub4_btn.hide = true;

        this.controlsConfig.plumbing_bathroom5_btn.hide = true;
        this.controlsConfig.plumbing_bathroomsink5_btn.hide = true;
        this.controlsConfig.plumbing_bathtub5_btn.hide = true;

        this.controlsConfig.plumbing_heater_btn.hide = true;
        this.controlsConfig.plumbing_dishwasher_btn.hide = true;
        this.controlsConfig.plumbing_activeleaks_btn.hide = true;
        this.controlsConfig.plumbing_priorleaks_btn.hide = true;
        this.controlsConfig.plumbing_wmhose_btn.hide = true;
        this.controlsConfig.plumbing_addComments_btn.hide = true;
    }

    plumbing_kitchen(): void {
        this.plumbing_reset();
        this.controlsConfig.plumbing_kitchen_title.hide = false;
        this.controlsConfig.plumbing_kitchensink_btn.hide = false;
    }

    plumbing_kitchen2(): void {
        this.plumbing_reset();
        this.controlsConfig.plumbing_kitchen_title.hide = false;
        this.controlsConfig.plumbing_kitchensink2_btn.hide = false;
    }

    plumbing_kitchen3(): void {
        this.plumbing_reset();
        this.controlsConfig.plumbing_kitchen_title.hide = false;
        this.controlsConfig.plumbing_kitchensink3_btn.hide = false;
    }

    plumbing_kitchen4(): void {
        this.plumbing_reset();
        this.controlsConfig.plumbing_kitchen_title.hide = false;
        this.controlsConfig.plumbing_kitchensink4_btn.hide = false;
    }

    plumbing_kitchen5(): void {
        this.plumbing_reset();
        this.controlsConfig.plumbing_kitchen_title.hide = false;
        this.controlsConfig.plumbing_kitchensink5_btn.hide = false;
    }

    plumbing_bathroom(): void {
        this.plumbing_reset();
        this.controlsConfig.plumbing_bathroom_title.hide = false;
        this.controlsConfig.plumbing_bathroomsink_btn.hide = false;
        this.controlsConfig.plumbing_bathtub_btn.hide = false;
    }

    plumbing_bathroom2(): void {
        this.plumbing_reset();
        this.controlsConfig.plumbing_bathroom_title.hide = false;
        this.controlsConfig.plumbing_bathroomsink2_btn.hide = false;
        this.controlsConfig.plumbing_bathtub2_btn.hide = false;
    }

    plumbing_bathroom3(): void {
        this.plumbing_reset();
        this.controlsConfig.plumbing_bathroom_title.hide = false;
        this.controlsConfig.plumbing_bathroomsink3_btn.hide = false;
        this.controlsConfig.plumbing_bathtub3_btn.hide = false;
    }

    plumbing_bathroom4(): void {
        this.plumbing_reset();
        this.controlsConfig.plumbing_bathroom_title.hide = false;
        this.controlsConfig.plumbing_bathroomsink4_btn.hide = false;
        this.controlsConfig.plumbing_bathtub4_btn.hide = false;
    }

    plumbing_bathroom4_edit(): void{
        this.component.addControlLabelopen(
                this.controlsConfig.plumbing_bathroom4_btn.description,
                this.controlsConfig.plumbing_bathroom4_btn.config.name);
    }

    plumbing_bathroom5(): void {
        this.plumbing_reset();
        this.controlsConfig.plumbing_bathroom_title.hide = false;
        this.controlsConfig.plumbing_bathroomsink5_btn.hide = false;
        this.controlsConfig.plumbing_bathtub5_btn.hide = false;
    }

    plumbing_heater(): void {

    }

    plumbing_dishwasher(): void {

    }

    plumbing_activeleaks(): void {

    }

    plumbing_priorleaks(): void {

    }

    plumbing_wmhose(): void {

    }

    plumbing_addComments(): void {
        this.component.openCommentDialog(this.controlsConfig.plumbing_addComments_btn.config.name);
    }

    plumbing_bathroomsink(): void {
        this.btnClick(this.controlsConfig.plumbing_bathroomsink_btn.config.name);
    }

    plumbing_bathroomsink2(): void {
        this.btnClick(this.controlsConfig.plumbing_bathroomsink2_btn.config.name);
    }

    plumbing_bathroomsink3(): void {
        this.btnClick(this.controlsConfig.plumbing_bathroomsink3_btn.config.name);
    }

    plumbing_bathroomsink4(): void {
        this.btnClick(this.controlsConfig.plumbing_bathroomsink4_btn.config.name);
    }

    plumbing_bathroomsink5(): void {
        this.btnClick(this.controlsConfig.plumbing_bathroomsink5_btn.config.name);
    }

    plumbing_bathtub(): void {
        this.btnClick(this.controlsConfig.plumbing_bathtub_btn.config.name);
    }

    plumbing_bathtub2(): void {
        this.btnClick(this.controlsConfig.plumbing_bathtub2_btn.config.name);
    }

    plumbing_bathtub3(): void {
        this.btnClick(this.controlsConfig.plumbing_bathtub3_btn.config.name);
    }

    plumbing_bathtub4(): void {
        this.btnClick(this.controlsConfig.plumbing_bathtub4_btn.config.name);
    }

    plumbing_bathtub5(): void {
        this.btnClick(this.controlsConfig.plumbing_bathtub5_btn.config.name);
    }

    plumbing_kitchensink(): void {
        this.btnClick(this.controlsConfig.plumbing_kitchensink_btn.config.name);
    }

    plumbing_kitchensink2(): void {
        this.btnClick(this.controlsConfig.plumbing_kitchensink2_btn.config.name);
    }

    plumbing_kitchensink3(): void {
        this.btnClick(this.controlsConfig.plumbing_kitchensink3_btn.config.name);
    }

    plumbing_kitchensink4(): void {
        this.btnClick(this.controlsConfig.plumbing_kitchensink4_btn.config.name);
    }

    plumbing_kitchensink5(): void {
        this.btnClick(this.controlsConfig.plumbing_kitchensink5_btn.config.name);
    }

    plumbing_contol_add(): void {
        this.component.addControlopen(this.controlsConfig.plumbing_control_add_btn.config.name);
    }

    base_dwelling_frontview_test(): void{
        this.btnClick(this.controlsConfig.base_dwelling_frontview_test_btn.config.name);
    }

    btnClick(control: string): void {
        const btnname = this.controlsConfig[control].config.name;
        const controlName = this.controlsConfig[control].config.controlName;
        const parentName = this.controlsConfig[control].config.parent;
        const metatags = this.controlsConfig[control].config.metatags;
        const cameraTip = this.controlsConfig[control].config.tip;
        const controlTier = this.controlsConfig[control].config.tier;

        this.component.test(btnname, controlName, parentName, metatags, cameraTip, controlTier);
    }

}

export interface ComponentClickEvent {
    test(control: string, child: string, parent: string, metatags: string, tip: string, tier: string): void;
    openCommentDialog(control: string): void;
    addControlopen(control: string): void;
    addControlLabelopen(description: string, ctrlName: string): void;
}
