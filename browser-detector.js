/**
    Copyright (C) 2013  Cédric Lefort

    The JavaScript code in this page is free software: you can
    redistribute it and/or modify it under the terms of the GNU
    General Public License (GNU GPL) as published by the Free Software
    Foundation, either version 3 of the License, or (at your option)
    any later version.  The code is distributed WITHOUT ANY WARRANTY;
    without even the implied warranty of MERCHANTABILITY or FITNESS
    FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

    As additional permission under GNU GPL version 3 section 7, you
    may distribute non-source (e.g., minimized or compacted) forms of
    that code without the copy of the GNU GPL normally required by
    section 4, provided you include this license notice and a URL
    through which recipients can access the Corresponding Source.
 */
Browser = {};

(function() { 

    Browser.Detector = function() {
        this._initDetect();
    };

    Browser.Detector = function(ua) {
        this._initDetect(ua);
    };

    Browser.Detector.prototype = {
        _initDetect: function(ua) {
            this.className = 'Browser.Detector';
            if (ua == null) {
                this.userAgent = navigator.userAgent.toLowerCase();
            } else {
                this.userAgent = ua.toLowerCase();
            }
            
            this.match = /(chrome)[ \/]([\w.]+)/.exec( this.userAgent ) ||
                         /(webkit)[ \/]([\w.]+)/.exec( this.userAgent ) ||
                         /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( this.userAgent ) ||
                         /(msie) ([\w.]+)/.exec( this.userAgent ) ||
                         this.userAgent.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( this.userAgent ) ||
                         [];
        },
        getBrowser: function() {
            return this.match[ 1 ] || "";
        },
        getVersion: function() {
            return this.match[ 2 ] || "";
        },
        isIE6: function() {
            return this.getBrowser() == 'msie' && this.getVersion().indexOf('6') == 0;
        },
        isIE7: function() {
            return this.getBrowser() == 'msie' && this.getVersion().indexOf('7') == 0;
        },
        isIE8: function() {
            return this.getBrowser() == 'msie' && this.getVersion().indexOf('8') == 0;
        },
        isIE9: function() {
            return this.getBrowser() == 'msie' && this.getVersion().indexOf('9') == 0;
        },
	isIE10: function() {
            return this.getBrowser() == 'msie' && this.getVersion().indexOf('10') == 0;
        },
        isIE: function() {
            return this.isIE6() || this.isIE7() || this.isIE8() || this.isIE9() || this.isIE10();
        },
    };
})();
