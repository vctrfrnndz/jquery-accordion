/*!
 * jQuery Accordion 0.0.1
 * (c) 2014 Victor Fernandez <victor@vctrfrnndz.com>
 * MIT Licensed.
 */

;(function ( $, window, document, undefined ) {

    var pluginName = 'accordion',
        defaults = {
            transitionSpeed: 300,
            transitionEasing: 'ease',
            controlElement: '[data-control]',
            contentElement: '[data-content]',
            groupElement: '[data-accordion-group]',
            singleOpen: true
        };

    function Accordion(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Accordion.prototype.init = function () {
        var self = this,
            opts = self.options;

        var $accordion = $(self.element),
            $content =  $accordion.find('> ' + opts.contentElement);
        
        function toggleTransition($el, remove) {
            if(!remove) {
                $content.css({
                    '-webkit-transition': 'max-height ' + opts.transitionSpeed + 'ms ' + opts.transitionEasing, 
                    'transition': 'max-height ' + opts.transitionSpeed + 'ms ' + opts.transitionEasing
                });
            } else {
                $content.css({
                    '-webkit-transition': '',
                    'transition': ''
                });
            }
        }

        function calculateHeight($el) {
            var height = 0;

            $el.children().each(function() {
                height = height + $(this).outerHeight();
            });

            $el.data('oHeight', height);
        }

        function toggleAccordion() {
            var isAccordionGroup = (opts.singleOpen) ? $accordion.parents(opts.groupElement).length > 0 : false;

            var closedCSS = { 'max-height': 0, 'overflow': 'hidden' };

            calculateHeight($content);

            toggleTransition($content);

            if(isAccordionGroup) {
                var $accordionGroup = $accordion.closest('[data-accordion-group]'),
                    $siblings = $accordion.siblings('[data-accordion]'),
                    $siblingsChildren = $siblings.find('[data-accordion]'),
                    $otherAccordions = $siblings.add($siblingsChildren);

                $otherAccordions.each(function() {
                    var $content = $(this).find('[data-content]');

                    $content.css('max-height', $content.data('oHeight'));

                    setTimeout(function() {
                        $content.css(closedCSS);
                    }, 0.1);
                });

                $otherAccordions.removeClass('open');
            }

            $content.promise().done(function() {
                if($accordion.hasClass('open')) {
                    if($content.css('max-height') === 'none') {
                        $content.css('max-height', $content.data('oHeight'));

                        setTimeout(function() {
                            $content.css(closedCSS);
                        }, 0.1);
                    } else {
                        $content.css(closedCSS);
                    }

                    $accordion.removeClass('open');
                } else {
                    $content.css('max-height', $content.data('oHeight'));
                    $accordion.addClass('open');

                    setTimeout(function() {
                        $content.css('max-height', 'none');
                    }, opts.transitionSpeed);
                }
            });
        }

        function addEventListeners() {
            $accordion.on('click', '> '+ opts.controlElement, toggleAccordion);
        }

        function checkIfCSSisSetup() {
            if($content.css('max-height') != 0) {
                $(opts.contentElement).css({ 'max-height': 0, 'overflow': 'hidden' });

                return false;
            }

            return true;
        }

        checkIfCSSisSetup();
        addEventListeners();
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, 
                new Accordion( this, options ));
            }
        });
    }

})( jQuery, window, document );