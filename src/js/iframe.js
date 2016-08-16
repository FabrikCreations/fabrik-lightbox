 var IFRAME_NS = 'iframe',
    _emptyPage = '//about:blank',

    _fixIframeBugs = function (isShowing) {
      if (mfp.currTemplate[IFRAME_NS]) {
        var el = mfp.currTemplate[IFRAME_NS].find('iframe');
        if (el.length) {
          // reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
          if (!isShowing) {
            el[0].src = _emptyPage;
          }

          // IE8 black screen bug fix
          if (mfp.isIE8) {
            el.css('display', isShowing ? 'block' : 'none');
          }
        }
      }
    };

  $.magnificPopup.registerModule(IFRAME_NS, {
    options: {
      markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-fitframe fitframe-wrap">' + 
                  '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen scrolling="no"></iframe>' +
                '</div>' +
                '<div class="mfp-title"></div>' +
              '</div>',
      srcAction: 'iframe_src',
      titleSrc: 'data-title',
    },

    proto: {
      initIframe: function () {
        mfp.types.push(IFRAME_NS);

        _mfpOn('BeforeChange', function (e, prevType, newType) {
          if (prevType !== newType) {
            if (prevType === IFRAME_NS) {
              _fixIframeBugs(); // iframe if removed
            } else if (newType === IFRAME_NS) {
              _fixIframeBugs(true); // iframe is showing
            }
          }
        });

        _mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function () {
          _fixIframeBugs();
        });
      },

      getIframe: function (item, template) {
        var embedSrc = item.src;
        var iframeSt = mfp.st.iframe;
        
        fabrik.embedService.getEmbed(embedSrc, { autoplay: true }).done(function (data) {

          // Hack for slate player until we normalise the returned object
          var oembedHtml = data.response ? data.response.html : data.html;

          embedSrc = $(oembedHtml);

          var dataObj = {};
          
          if (iframeSt.srcAction) {
            dataObj[iframeSt.srcAction] = embedSrc[0].src;
          }

          if (item.el) {
            dataObj.title = item.el.attr(iframeSt.titleSrc);
          }

          if (data.width && data.height) {
            dataObj.fitframe_style = 'padding-bottom: ' + ((data.height / data.width) * 100).toPrecision(4) + '%';
          }

          mfp._parseMarkup(template, dataObj, item);

          mfp.updateStatus('ready');

        });

        return template;

      }
    }
  });