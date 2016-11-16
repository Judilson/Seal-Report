﻿declare var translations;
declare var availableDateKeywords;
declare function setDatePickerDefaults() : void;

module SWIUtil {
    export function tr(reference : string) : string {
        var result = translations[reference];
        if (!result || result == "") result = reference;
        return result;
    }

    export function Newguid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        })
    }

    export function GetReportName(path: string): string {
        return path.split('\\').pop().replace(".srex", "");
    }

    export function GetDirectoryName(path: string): string {
        return path.substring(0, path.lastIndexOf("\\"));
    }

    export function ShowMessage(alertClass: string, message: string, timeout: number) {
        $waitDialog.modal('hide');
        SWIUtil.HideMessages();
        var $alert = $("<div class='alert' style='position:absolute; width:100%;z-index: 2000;margin-bottom:0;'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><p>" + message + "</p></div>");
        $alert.css("top", ($(window).height() - 54).toString() + "px");
        $alert.addClass(alertClass);
        $("body").append($alert);
        if (timeout == 0) timeout = 15000;
        if (timeout > 0) setTimeout(function () { $alert.alert('close'); }, timeout);
    }

    export function HideMessages() {
        $('.alert').alert('close');
    }

    export function EnableButton(button: JQuery, enabled: boolean) {
        if (!enabled) button.prop('disabled', 'true').addClass("disabled");
        else button.removeProp('disabled').removeClass("disabled");
    }

    export function EnableLinkInput(link: JQuery, enabled: boolean) {
        if (!enabled) link.attr('disabled', 'true');
        else link.removeAttr('disabled');
    }

    export function ActivatePanel(button: JQuery, panel: JQuery, active: boolean) {
        if (!active) {
            button.removeClass("active");
            panel.hide();
        }
        else {
            button.addClass("active");
            panel.show();
        }
    }

    export function ShowHideControl(control: JQuery, show: boolean) {
        if (!show) control.hide();
        else control.show();
    }

    export function GetOption(val: string, text: string, valSelected: string, icon?: string) {
        var $result = $("<option>").attr("value", val).html(text ? text : val);
        if (icon) $result.attr("data-icon", icon);
        if (val == valSelected) $result.attr("selected", "true");
        return $result;
    }

}