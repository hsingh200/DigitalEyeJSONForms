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

        this.controlsConfig.base_dwelling_front_btn.hide = false;
        this.controlsConfig.base_dwelling_back_btn.hide = false;
        this.controlsConfig.base_dwelling_right_btn.hide = false;
        this.controlsConfig.base_dwelling_left_btn.hide = false;
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

        this.controlsConfig.base_dwelling_front_btn.hide = true;
        this.controlsConfig.base_dwelling_back_btn.hide = true;
        this.controlsConfig.base_dwelling_right_btn.hide = true;
        this.controlsConfig.base_dwelling_left_btn.hide = true;

        this.controlsConfig.base_propspec_add_btn.hide = true;
        this.controlsConfig.base_propspec_add_details.hide = true;
    }

    base_roofline(): void {
        // this.controlsConfig.base_roofline_btn.value = 'test';
        if (this.controlsConfig.base_roofline_btn.value === '' || this.controlsConfig.base_roofline_btn.value === undefined) {
            this.component.test(this.controlsConfig.base_roofline_btn.config.name,
                this.controlsConfig.base_roofline_btn.config.controlName,
                this.controlsConfig.base_roofline_btn.config.parent,
                this.controlsConfig.base_roofline_btn.config.metatags,
                this.controlsConfig.base_roofline_btn.config.tip);
        }
        else {
            this.controlsConfig.base_back_btn.config.tier = 2;

            this.base_reset();
            this.base_roofline_tier2();
        }
    }

    base_dwelling(): void {
        this.base_reset();
        this.base_dwelling_tier2();
    }

    base_propspec(): void {
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
        this.component.test(this.controlsConfig.base_propspec_add_btn.config.name,
            this.controlsConfig.base_propspec_add_btn.config.controlName,
            this.controlsConfig.base_propspec_add_btn.config.parent,
            this.controlsConfig.base_propspec_add_btn.config.metatags,
            this.controlsConfig.base_propspec_add_btn.config.tip);
    }

    base_propspec_add_details(): void {
        this.component.openCommentDialog(this.controlsConfig.base_propspec_add_details.config.name);
    }

    base_roofline_add(): void {
        this.component.test(this.controlsConfig.base_roofline_btn.config.name,
            this.controlsConfig.base_roofline_btn.config.controlName,
            this.controlsConfig.base_roofline_btn.config.parent,
            this.controlsConfig.base_roofline_btn.config.metatags,
            this.controlsConfig.base_roofline_btn.config.tip);
    }

    base_dwelling_front(): void {
        this.component.test(this.controlsConfig.base_dwelling_front_btn.config.name,
            this.controlsConfig.base_dwelling_front_btn.config.controlName,
            this.controlsConfig.base_dwelling_front_btn.config.parent,
            this.controlsConfig.base_dwelling_front_btn.config.metatags,
            this.controlsConfig.base_dwelling_front_btn.config.tip);
    }

    base_dwelling_back(): void {
        this.component.test(this.controlsConfig.base_dwelling_back_btn.config.name,
            this.controlsConfig.base_dwelling_back_btn.config.controlName,
            this.controlsConfig.base_dwelling_back_btn.config.parent,
            this.controlsConfig.base_dwelling_back_btn.config.metatags,
            this.controlsConfig.base_dwelling_back_btn.config.tip);
    }

    base_dwelling_right(): void {
        this.component.test(this.controlsConfig.base_dwelling_right_btn.config.name,
            this.controlsConfig.base_dwelling_right_btn.config.controlName,
            this.controlsConfig.base_dwelling_right_btn.config.parent,
            this.controlsConfig.base_dwelling_right_btn.config.metatags,
            this.controlsConfig.base_dwelling_right_btn.config.tip);
    }

    base_dwelling_left(): void {
        this.component.test(this.controlsConfig.base_dwelling_left_btn.config.name,
            this.controlsConfig.base_dwelling_left_btn.config.controlName,
            this.controlsConfig.base_dwelling_left_btn.config.parent,
            this.controlsConfig.base_dwelling_left_btn.config.metatags,
            this.controlsConfig.base_dwelling_left_btn.config.tip);
    }

    btnDriveway(): void {
        this.component.test(this.controlsConfig.btnDriveway.config.name,
            this.controlsConfig.btnDriveway.config.controlName,
            this.controlsConfig.btnDriveway.config.parent,
            this.controlsConfig.btnDriveway.config.metatags,
            this.controlsConfig.btnDriveway.config.tip);
    }

    btnFoundation(): void {
        this.component.test(this.controlsConfig.btnFoundation.config.name,
            this.controlsConfig.btnFoundation.config.controlName,
            this.controlsConfig.btnFoundation.config.parent,
            this.controlsConfig.btnFoundation.config.metatags,
            this.controlsConfig.btnFoundation.config.tip);
    }

    btnSidewalks(): void {
        this.component.test(this.controlsConfig.btnSidewalks.config.name,
            this.controlsConfig.btnSidewalks.config.controlName,
            this.controlsConfig.btnSidewalks.config.parent,
            this.controlsConfig.btnSidewalks.config.metatags,
            this.controlsConfig.btnSidewalks.config.tip);
    }

    btnPorches(): void {
        this.component.test(this.controlsConfig.btnPorches.config.name,
            this.controlsConfig.btnPorches.config.controlName,
            this.controlsConfig.btnPorches.config.parent,
            this.controlsConfig.btnPorches.config.metatags,
            this.controlsConfig.btnPorches.config.tip);
    }

    btnStairs(): void {
        this.component.test(this.controlsConfig.btnStairs.config.name,
            this.controlsConfig.btnStairs.config.controlName,
            this.controlsConfig.btnStairs.config.parent,
            this.controlsConfig.btnStairs.config.metatags,
            this.controlsConfig.btnStairs.config.tip);
    }

    btnTrees(): void {
        this.component.test(this.controlsConfig.btnTrees.config.name,
            this.controlsConfig.btnTrees.config.controlName,
            this.controlsConfig.btnTrees.config.parent,
            this.controlsConfig.btnTrees.config.metatags,
            this.controlsConfig.btnTrees.config.tip);
    }

    btnChimney(): void {
        this.component.test(this.controlsConfig.btnChimney.config.name,
            this.controlsConfig.btnChimney.config.controlName,
            this.controlsConfig.btnChimney.config.parent,
            this.controlsConfig.btnChimney.config.metatags,
            this.controlsConfig.btnChimney.config.tip);
    }

    btnFence(): void {
        this.component.test(this.controlsConfig.btnFence.config.name,
            this.controlsConfig.btnFence.config.controlName,
            this.controlsConfig.btnFence.config.parent,
            this.controlsConfig.btnFence.config.metatags,
            this.controlsConfig.btnFence.config.tip);
    }

    btnSiding(): void {
        this.component.test(this.controlsConfig.btnSiding.config.name,
            this.controlsConfig.btnSiding.config.controlName,
            this.controlsConfig.btnSiding.config.parent,
            this.controlsConfig.btnSiding.config.metatags,
            this.controlsConfig.btnSiding.config.tip);
    }

    btnGutters(): void {
        this.component.test(this.controlsConfig.btnGutters.config.name,
            this.controlsConfig.btnGutters.config.controlName,
            this.controlsConfig.btnGutters.config.parent,
            this.controlsConfig.btnGutters.config.metatags,
            this.controlsConfig.btnGutters.config.tip);
    }

    btnYard(): void {
        this.component.test(this.controlsConfig.btnYard.config.name,
            this.controlsConfig.btnYard.config.controlName,
            this.controlsConfig.btnYard.config.parent,
            this.controlsConfig.btnYard.config.metatags,
            this.controlsConfig.btnYard.config.tip);
    }

    plumbing_tier1(): void {
        this.controlsConfig.plumbing_title.hide = false;
        this.controlsConfig.plumbing_control_add_btn.hide = false;

        this.controlsConfig.plumbing_kitchen_btn.hide = false;
        if (this.controlsConfig.plumbing_kitchen2_btn.config.enabled === true){
            this.controlsConfig.plumbing_kitchen2_btn.hide = false;
        }
        if (this.controlsConfig.plumbing_kitchen3_btn.config.enabled === true){
            this.controlsConfig.plumbing_kitchen3_btn.hide = false;
        }
        if (this.controlsConfig.plumbing_kitchen4_btn.config.enabled === true){
            this.controlsConfig.plumbing_kitchen4_btn.hide = false;
        }
        if (this.controlsConfig.plumbing_kitchen5_btn.config.enabled === true){
            this.controlsConfig.plumbing_kitchen5_btn.hide = false;
        }

        this.controlsConfig.plumbing_bathroom_btn.hide = false;
        if (this.controlsConfig.plumbing_bathroom2_btn.config.enabled === true){
            this.controlsConfig.plumbing_bathroom2_btn.hide = false;
        }
        if (this.controlsConfig.plumbing_bathroom3_btn.config.enabled === true){
            this.controlsConfig.plumbing_bathroom3_btn.hide = false;
        }
        if (this.controlsConfig.plumbing_bathroom4_btn.config.enabled === true){
            this.controlsConfig.plumbing_bathroom4_btn.hide = false;
        }
        if (this.controlsConfig.plumbing_bathroom5_btn.config.enabled === true){
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
        this.component.test(this.controlsConfig.plumbing_bathroomsink_btn.config.name,
            this.controlsConfig.plumbing_bathroomsink_btn.config.controlName,
            this.controlsConfig.plumbing_bathroomsink_btn.config.parent,
            this.controlsConfig.plumbing_bathroomsink_btn.config.metatags,
            this.controlsConfig.plumbing_bathroomsink_btn.config.tip);
    }

    plumbing_bathroomsink1(): void {
        this.component.test(this.controlsConfig.plumbing_bathroomsink1_btn.config.name,
            this.controlsConfig.plumbing_bathroomsink1_btn.config.controlName,
            this.controlsConfig.plumbing_bathroomsink1_btn.config.parent,
            this.controlsConfig.plumbing_bathroomsink1_btn.config.metatags,
            this.controlsConfig.plumbing_bathroomsink1_btn.config.tip);
    }

    plumbing_bathroomsink2(): void {
        this.component.test(this.controlsConfig.plumbing_bathroomsink2_btn.config.name,
            this.controlsConfig.plumbing_bathroomsink2_btn.config.controlName,
            this.controlsConfig.plumbing_bathroomsink2_btn.config.parent,
            this.controlsConfig.plumbing_bathroomsink2_btn.config.metatags,
            this.controlsConfig.plumbing_bathroomsink2_btn.config.tip);
    }

    plumbing_bathroomsink3(): void {
        this.component.test(this.controlsConfig.plumbing_bathroomsink3_btn.config.name,
            this.controlsConfig.plumbing_bathroomsink3_btn.config.controlName,
            this.controlsConfig.plumbing_bathroomsink3_btn.config.parent,
            this.controlsConfig.plumbing_bathroomsink3_btn.config.metatags,
            this.controlsConfig.plumbing_bathroomsink3_btn.config.tip);
    }

    plumbing_bathroomsink4(): void {
        this.component.test(this.controlsConfig.plumbing_bathroomsink4_btn.config.name,
            this.controlsConfig.plumbing_bathroomsink4_btn.config.controlName,
            this.controlsConfig.plumbing_bathroomsink4_btn.config.parent,
            this.controlsConfig.plumbing_bathroomsink4_btn.config.metatags,
            this.controlsConfig.plumbing_bathroomsink4_btn.config.tip);
    }

    plumbing_bathroomsink5(): void {
        this.component.test(this.controlsConfig.plumbing_bathroomsink5_btn.config.name,
            this.controlsConfig.plumbing_bathroomsink5_btn.config.controlName,
            this.controlsConfig.plumbing_bathroomsink5_btn.config.parent,
            this.controlsConfig.plumbing_bathroomsink5_btn.config.metatags,
            this.controlsConfig.plumbing_bathroomsink5_btn.config.tip);
    }

    plumbing_bathtub(): void {
        this.component.test(this.controlsConfig.plumbing_bathtub_btn.config.name,
            this.controlsConfig.plumbing_bathtub_btn.config.controlName,
            this.controlsConfig.plumbing_bathtub_btn.config.parent,
            this.controlsConfig.plumbing_bathtub_btn.config.metatags,
            this.controlsConfig.plumbing_bathtub_btn.config.tip);
    }

    plumbing_bathtub1(): void {
        this.component.test(this.controlsConfig.plumbing_bathtub1_btn.config.name,
            this.controlsConfig.plumbing_bathtub1_btn.config.controlName,
            this.controlsConfig.plumbing_bathtub1_btn.config.parent,
            this.controlsConfig.plumbing_bathtub1_btn.config.metatags,
            this.controlsConfig.plumbing_bathtub1_btn.config.tip);
    }

    plumbing_bathtub2(): void {
        this.component.test(this.controlsConfig.plumbing_bathtub2_btn.config.name,
            this.controlsConfig.plumbing_bathtub2_btn.config.controlName,
            this.controlsConfig.plumbing_bathtub2_btn.config.parent,
            this.controlsConfig.plumbing_bathtub2_btn.config.metatags,
            this.controlsConfig.plumbing_bathtub2_btn.config.tip);
    }

    plumbing_bathtub3(): void {
        this.component.test(this.controlsConfig.plumbing_bathtub3_btn.config.name,
            this.controlsConfig.plumbing_bathtub3_btn.config.controlName,
            this.controlsConfig.plumbing_bathtub3_btn.config.parent,
            this.controlsConfig.plumbing_bathtub3_btn.config.metatags,
            this.controlsConfig.plumbing_bathtub3_btn.config.tip);
    }

    plumbing_bathtub4(): void {
        this.component.test(this.controlsConfig.plumbing_bathtub4_btn.config.name,
            this.controlsConfig.plumbing_bathtub4_btn.config.controlName,
            this.controlsConfig.plumbing_bathtub4_btn.config.parent,
            this.controlsConfig.plumbing_bathtub4_btn.config.metatags,
            this.controlsConfig.plumbing_bathtub4_btn.config.tip);
    }

    plumbing_bathtub5(): void {
        this.component.test(this.controlsConfig.plumbing_bathtub5_btn.config.name,
            this.controlsConfig.plumbing_bathtub5_btn.config.controlName,
            this.controlsConfig.plumbing_bathtub5_btn.config.parent,
            this.controlsConfig.plumbing_bathtub5_btn.config.metatags,
            this.controlsConfig.plumbing_bathtub5_btn.config.tip);
    }

    plumbing_kitchensink(): void {
        this.component.test(this.controlsConfig.plumbing_kitchensink_btn.config.name,
            this.controlsConfig.plumbing_kitchensink_btn.config.controlName,
            this.controlsConfig.plumbing_kitchensink_btn.config.parent,
            this.controlsConfig.plumbing_kitchensink_btn.config.metatags,
            this.controlsConfig.plumbing_kitchensink_btn.config.tip);
    }

    plumbing_kitchensink2(): void {
        this.component.test(this.controlsConfig.plumbing_kitchensink2_btn.config.name,
            this.controlsConfig.plumbing_kitchensink2_btn.config.controlName,
            this.controlsConfig.plumbing_kitchensink2_btn.config.parent,
            this.controlsConfig.plumbing_kitchensink2_btn.config.metatags,
            this.controlsConfig.plumbing_kitchensink2_btn.config.tip);
    }

    plumbing_kitchensink3(): void {
        this.component.test(this.controlsConfig.plumbing_kitchensink3_btn.config.name,
            this.controlsConfig.plumbing_kitchensink3_btn.config.controlName,
            this.controlsConfig.plumbing_kitchensink3_btn.config.parent,
            this.controlsConfig.plumbing_kitchensink3_btn.config.metatags,
            this.controlsConfig.plumbing_kitchensink3_btn.config.tip);
    }

    plumbing_kitchensink4(): void {
        this.component.test(this.controlsConfig.plumbing_kitchensink4_btn.config.name,
            this.controlsConfig.plumbing_kitchensink4_btn.config.controlName,
            this.controlsConfig.plumbing_kitchensink4_btn.config.parent,
            this.controlsConfig.plumbing_kitchensink4_btn.config.metatags,
            this.controlsConfig.plumbing_kitchensink4_btn.config.tip);
    }

    plumbing_kitchensink5(): void {
        this.component.test(this.controlsConfig.plumbing_kitchensink5_btn.config.name,
            this.controlsConfig.plumbing_kitchensink5_btn.config.controlName,
            this.controlsConfig.plumbing_kitchensink5_btn.config.parent,
            this.controlsConfig.plumbing_kitchensink5_btn.config.metatags,
            this.controlsConfig.plumbing_kitchensink5_btn.config.tip);
    }

    plumbing_contol_add(): void {
        this.component.addControlopen(this.controlsConfig.plumbing_control_add_btn.config.name);
    }

}

export interface ComponentClickEvent {
    test(control: string, child: string, parent: string, metatags: string): void;
    openCommentDialog(control: string): void;
    addControlopen(control: string): void;
}
