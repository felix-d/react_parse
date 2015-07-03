(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[
    {
        "name": "layouts.js", 
        "parent": "eventshopper", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/index.jsx"
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/layouts.js", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/layouts.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/layouts.js", 
            "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/layouts.js", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/layouts.js", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/layouts.js", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/layouts.js"
        ], 
        "id": 0
    }, 
    {
        "name": "index.jsx", 
        "parent": "eventshopper", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/", 
        "nodemodules": [
            "react", 
            "debug"
        ], 
        "links": [
            69, 
            81, 
            0, 
            47
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/RouterContainer.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/RouterActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/routes.js", 
            "/home/felix/work/eventshopper/eventshopper/js/layouts.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments/asyncActions.js"
        ], 
        "id": 1
    }, 
    {
        "name": "routes.jsx", 
        "parent": "eventshopper", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            36
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/IntlApp.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomPage.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/TicketSearchPage.js", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/TicketReviewPage.js", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/DeliveryMethodPage.js", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/components/SignUpPage.js", 
            "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/components/PaymentInformationPage.js", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/VerifyPurchasePage.js", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/ConfirmationPage.js", 
            "/home/felix/work/eventshopper/eventshopper/js/example/routes.js"
        ], 
        "id": 2
    }, 
    {
        "name": "CartConstants.js", 
        "parent": "order", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/order/constants/", 
        "nodemodules": [
            "keymirror"
        ], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/actions/CartActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/actions/SearchActions.js"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 3
    }, 
    {
        "name": "ProcessOrderConstants.js", 
        "parent": "order", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/order/constants/", 
        "nodemodules": [
            "keymirror"
        ], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/ProcessOrderStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/actions/ProcessOrderActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserServerRecordStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/TimerStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/VerifyPurchasePage.jsx"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 4
    }, 
    {
        "name": "ProcessOrderStore.js", 
        "parent": "order", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/order/stores/", 
        "nodemodules": [], 
        "links": [
            62, 
            62, 
            4, 
            39, 
            241, 
            31, 
            8
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/order/actions/ProcessOrderActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/RouterHandlerMixin.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/ModalManager.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/VerifyPurchasePage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/ReviewOrderModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/PrintReceipt.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/PurchaseConfirmation.jsx"
        ], 
        "type": "store", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/constants/ProcessOrderConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/ModalManagerConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/constants/ConfirmationConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/UserConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/utils/processOrderMapper.js"
        ], 
        "id": 5
    }, 
    {
        "name": "CartStore.js", 
        "parent": "order", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/order/stores/", 
        "nodemodules": [], 
        "links": [
            62, 
            62, 
            9, 
            3, 
            178
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/RouterHandlerMixin.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/InputStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/WebApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/UserActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/ModalManager.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/SeatsLocation.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/TicketInsurance.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/PriceTypeChoiceModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/DeliveryOrderSummary.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/UpsellModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/OrderSummaryModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/DeliveryMethodModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/ReviewOrderModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/actions/SearchActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/TicketSearchPage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/TicketInsuranceConfirmation.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/PrintReceipt.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/PurchaseConfirmation.jsx"
        ], 
        "type": "store", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/utils/searchMapper.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/constants/CartConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/constants/SearchConstants.js"
        ], 
        "id": 6
    }, 
    {
        "name": "mappedOrder.json", 
        "parent": "__tests__", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/order/stores/__tests__/fixtures/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 7
    }, 
    {
        "name": "processOrderMapper.js", 
        "parent": "order", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/order/utils/", 
        "nodemodules": [], 
        "links": [
            70
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/ProcessOrderStore.js"
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/dateParser.js"
        ], 
        "id": 8
    }, 
    {
        "name": "searchMapper.js", 
        "parent": "order", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/order/utils/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 9
    }, 
    {
        "name": "creditResponses.json", 
        "parent": "__tests__", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/order/utils/__tests__/fixtures/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 10
    }, 
    {
        "name": "order.json", 
        "parent": "__tests__", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/order/utils/__tests__/fixtures/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 11
    }, 
    {
        "name": "search.json", 
        "parent": "__tests__", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/order/utils/__tests__/fixtures/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 12
    }, 
    {
        "name": "CartActions.js", 
        "parent": "order", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/order/actions/", 
        "nodemodules": [], 
        "links": [
            62, 
            76, 
            3, 
            19
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/OrderApi.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/UserActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageHeader.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/UpsellModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/PriceTypeChooser.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/DeliveryMethodModule.jsx"
        ], 
        "type": "action", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/WebApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/constants/CartConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserSessionStore.js"
        ], 
        "id": 13
    }, 
    {
        "name": "ProcessOrderActions.js", 
        "parent": "order", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/order/actions/", 
        "nodemodules": [], 
        "links": [
            62, 
            62, 
            76, 
            4, 
            5
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/VerifyOrderSummary.jsx"
        ], 
        "type": "action", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/WebApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/constants/ProcessOrderConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/ProcessOrderStore.js"
        ], 
        "id": 14
    }, 
    {
        "name": "UsersChoicesConstants.js", 
        "parent": "user", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/user/constants/", 
        "nodemodules": [
            "keymirror"
        ], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UsersChoicesActions.js"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 15
    }, 
    {
        "name": "UserSessionConstants.js", 
        "parent": "user", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/user/constants/", 
        "nodemodules": [
            "keymirror"
        ], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserSessionStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UserSessionActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/mixins/WaitingRoomDialogsMixin.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomDialogsStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/ItsYourTurn.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/TicketSearchPage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 16
    }, 
    {
        "name": "UsersChoicesStore.js", 
        "parent": "user", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/user/stores/", 
        "nodemodules": [], 
        "links": [
            62, 
            15, 
            155, 
            148
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/RouterHandlerMixin.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/WebApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/components/SignUpFormChildren.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/SeatsLocation.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/TicketInsurance.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/DeliveryOrderSummary.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/UpsellModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/ReviewOrderModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/PreOrderInfo.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/AcceptSplitSeats.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/TicketSearchPage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PriceTable.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/SelectedEventModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/FindBestPriceTableEntry.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickEventModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/MoreInfoModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/VenueMapModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PriceTableEntry.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickNumberOfInvitesModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickNumberOfTicketsModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickPriceLevelModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/utils/seriesMapper.js", 
            "/home/felix/work/eventshopper/eventshopper/js/example/components/ExampleModals.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/TicketInsuranceConfirmation.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/PrintReceipt.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/EventInfo.jsx"
        ], 
        "type": "store", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/constants/UsersChoicesConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/constants/WaitingRoomConstants.js"
        ], 
        "id": 17
    }, 
    {
        "name": "UserServerRecordStore.js", 
        "parent": "user", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/user/stores/", 
        "nodemodules": [], 
        "links": [
            62, 
            4, 
            57, 
            38, 
            29
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/WebApi.js"
        ], 
        "type": "store", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/constants/ProcessOrderConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/FormStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/FormConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/CreditCard.js"
        ], 
        "id": 18
    }, 
    {
        "name": "UserSessionStore.js", 
        "parent": "user", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/user/stores/", 
        "nodemodules": [], 
        "links": [
            16, 
            39, 
            83, 
            62, 
            62, 
            220, 
            21, 
            21
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/order/actions/CartActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UserSessionActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/WebApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/TimerActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomDialogsStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomPagePhaseD.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomPagePhaseC.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/ItsYourTurn.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/TicketSearchPage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/InvalidAccessCode.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js"
        ], 
        "type": "store", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/constants/UserSessionConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/ModalManagerConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/UserActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/actions/StockPileActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/envConfig.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UserSessionActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UserSessionActions.js"
        ], 
        "id": 19
    }, 
    {
        "name": "amodsellIds.json", 
        "parent": "__tests__", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/user/stores/__tests__/fixtures/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 20
    }, 
    {
        "name": "UserSessionActions.js", 
        "parent": "user", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/user/actions/", 
        "nodemodules": [], 
        "links": [
            62, 
            62, 
            16, 
            19, 
            155, 
            59, 
            76
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserSessionStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserSessionStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/UserActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/ItsYourTurn.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/InvalidAccessCode.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js"
        ], 
        "type": "action", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/envConfig.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/constants/UserSessionConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserSessionStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/IntlStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/WebApi.js", 
            "/home/felix/work/eventshopper/package.json"
        ], 
        "id": 21
    }, 
    {
        "name": "UsersChoicesActions.js", 
        "parent": "user", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/user/actions/", 
        "nodemodules": [], 
        "links": [
            15, 
            62
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/TicketInsurance.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/DeliveryOrderSummary.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/UpsellModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/EnterPromoCode.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/AcceptSplitSeats.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/FindBestPriceTableEntry.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickEventModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PriceTableEntry.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickNumberOfInvitesModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickNumberOfTicketsModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js"
        ], 
        "type": "action", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/constants/UsersChoicesConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js"
        ], 
        "id": 22
    }, 
    {
        "name": "index.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/polyfills/", 
        "nodemodules": [], 
        "links": [
            24
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/polyfills/intl.js"
        ], 
        "id": 23
    }, 
    {
        "name": "intl.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/polyfills/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/polyfills/index.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 24
    }, 
    {
        "name": "NumberSelectorMixin.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/mixins/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/NumberSelector.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/NumberSelectorRadios.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/NumberSelectorFancy.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/NumberSelectorDropdown.jsx"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 25
    }, 
    {
        "name": "SetIntervalMixin.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/mixins/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/example/components/ExamplePage.jsx"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 26
    }, 
    {
        "name": "GroupMinMaxDisplayerMixin.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/mixins/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 27
    }, 
    {
        "name": "RouterHandlerMixin.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/mixins/", 
        "nodemodules": [], 
        "links": [
            62, 
            56, 
            36, 
            155, 
            6, 
            212, 
            17, 
            68, 
            5, 
            83
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/RouterStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/RouterPages.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/ProcessOrderStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/UserActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/OrderApi.js"
        ], 
        "id": 28
    }, 
    {
        "name": "CreditCard.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/constants/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserServerRecordStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/InputStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/creditCard.js"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 29
    }, 
    {
        "name": "TimerConstants.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/constants/", 
        "nodemodules": [
            "keymirror"
        ], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/TimerStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/TimerActions.js"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 30
    }, 
    {
        "name": "UserConstants.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/constants/", 
        "nodemodules": [
            "keymirror"
        ], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/ProcessOrderStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/TimerStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/UserActions.js"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 31
    }, 
    {
        "name": "NumberSelectorConstants.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/constants/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/NumberSelector.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/UpsellModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickNumberOfInvitesModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/example/components/ExampleNumberSelector.jsx"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 32
    }, 
    {
        "name": "ExperimentsConstants.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/constants/", 
        "nodemodules": [
            "keymirror"
        ], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments/OptimizelyApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments/ExperimentEventFactory.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ExperimentsStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/ExperimentsActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/example/components/ExperimentsExamplePage.jsx"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 33
    }, 
    {
        "name": "InputConstants.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/constants/", 
        "nodemodules": [
            "keymirror"
        ], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/InputStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/FormValidation.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/InputActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldGenerator.jsx"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 34
    }, 
    {
        "name": "IntlConstants.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/constants/", 
        "nodemodules": [
            "keymirror"
        ], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/IntlStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/IntlActions.js"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 35
    }, 
    {
        "name": "PageConstants.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/constants/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/routes.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/RouterHandlerMixin.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/OrderApi.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageHeader.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/layouts/index.js", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/components/SignUpFormChildren.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/components/SignUpPage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/components/SignUpOrderSummary.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/layouts/index.js", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/CustomerInformation.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/VerifyPurchasePage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/layouts/index.js", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/DeliveryMethodPage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/DeliveryOrderSummary.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/TicketReviewPage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/ReviewOrderSummary.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/ReviewOrderModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/layouts/index.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/TicketSearchPage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickPriceLevelModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/layouts/index.js", 
            "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/components/PaymentInformationPage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/components/PaymentOrderSummary.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/layouts/index.js", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/ConfirmationPage.jsx"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 36
    }, 
    {
        "name": "PageLayoutConstants.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/constants/", 
        "nodemodules": [
            "keymirror"
        ], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/PageLayoutStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/PageLayoutActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/components/SignUpFormChildren.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/layouts/index.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/PreOrderInfo.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/PurchaseFlowModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickPriceLevelModule.jsx"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 37
    }, 
    {
        "name": "FormConstants.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/constants/", 
        "nodemodules": [
            "keymirror"
        ], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserServerRecordStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/InputStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/FormStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/FormActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/DebugToolbar.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormChildrenToggle.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldCreditCardExpDate.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageHeader.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormParent.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/components/SignUpFormChildren.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/components/SignUpOrderSummary.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/CustomerInformation.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/VerifyPurchasePage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/PreOrderInfo.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/PreOrderInfo.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/components/PaymentOrderSummary.jsx"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 38
    }, 
    {
        "name": "ModalManagerConstants.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/constants/", 
        "nodemodules": [
            "keymirror"
        ], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/ProcessOrderStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserSessionStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ModalManagerStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/ModalManagerActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomDialogsStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/stores/SearchDialogsStore.js"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 39
    }, 
    {
        "name": "ConfigConstants.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/constants/", 
        "nodemodules": [
            "keymirror"
        ], 
        "links": [
            43, 
            42
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ConfigStore.js"
        ], 
        "type": "constant", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/config/bfox/schema.json", 
            "/home/felix/work/eventshopper/eventshopper/js/common/config/schema.json", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/__tests__/schema_test.json"
        ], 
        "id": 40
    }, 
    {
        "name": "RouterConstants.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/constants/", 
        "nodemodules": [
            "keymirror"
        ], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/RouterStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/RouterActions.js"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 41
    }, 
    {
        "name": "schema.json", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/config/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/ConfigConstants.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 42
    }, 
    {
        "name": "schema.json", 
        "parent": "config", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/config/bfox/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/ConfigConstants.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 43
    }, 
    {
        "name": "OptimizelyApi.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/experiments/", 
        "nodemodules": [], 
        "links": [
            33, 
            62
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments/index.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments/OptimizelyExperiment.js"
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/ExperimentsConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js"
        ], 
        "id": 44
    }, 
    {
        "name": "index.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/experiments/", 
        "nodemodules": [], 
        "links": [
            48, 
            44, 
            50
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments/OptimizelyExperiment.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments/OptimizelyApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments/ExperimentEventFactory.js"
        ], 
        "id": 45
    }, 
    {
        "name": "Experiment.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/experiments/", 
        "nodemodules": [], 
        "links": [
            62, 
            62
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments/OptimizelyExperiment.js"
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js"
        ], 
        "id": 46
    }, 
    {
        "name": "asyncActions.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/experiments/", 
        "nodemodules": [], 
        "links": [
            85, 
            62
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/index.jsx"
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/ExperimentsActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js"
        ], 
        "id": 47
    }, 
    {
        "name": "OptimizelyExperiment.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/experiments/", 
        "nodemodules": [
            "util"
        ], 
        "links": [
            62, 
            44, 
            46
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments/index.js"
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments/OptimizelyApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments/Experiment.js"
        ], 
        "id": 48
    }, 
    {
        "name": "ExperimentEvent.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/experiments/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments/ExperimentEventFactory.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 49
    }, 
    {
        "name": "ExperimentEventFactory.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/experiments/", 
        "nodemodules": [], 
        "links": [
            33, 
            49, 
            222
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments/index.js"
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/ExperimentsConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments/ExperimentEvent.js", 
            "/home/felix/work/eventshopper/eventshopper/js/example/constants/ExampleConstants.js"
        ], 
        "id": 50
    }, 
    {
        "name": "InputStore.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/stores/", 
        "nodemodules": [], 
        "links": [
            38, 
            34, 
            62, 
            6, 
            29, 
            72
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/FormStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/FormValidation.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/WebApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldStates.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldCreditCardExpDate.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldCountries.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldGenerator.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormCreditCardHighlight.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/TicketInsurance.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/CustomerInformation.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/PreOrderInfo.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/components/PaymentInformationForms.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/PrintReceipt.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/PurchaseConfirmation.jsx"
        ], 
        "type": "store", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/FormConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/InputConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/CreditCard.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/creditCard.js"
        ], 
        "id": 51
    }, 
    {
        "name": "TimerStore.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/stores/", 
        "nodemodules": [], 
        "links": [
            30, 
            31, 
            178, 
            4
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/TimerActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/DebugToolbar.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageLayout.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageHeader.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Timer.jsx"
        ], 
        "type": "store", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/TimerConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/UserConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/constants/SearchConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/constants/ProcessOrderConstants.js"
        ], 
        "id": 52
    }, 
    {
        "name": "ConfigStore.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/stores/", 
        "nodemodules": [
            "convict"
        ], 
        "links": [
            62, 
            73, 
            40
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/BackendApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/ConfigApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/WebApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/DebugToolbar.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageHeader.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageFooter.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldGenerator.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/LoadingOverlay.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/TicketInsurance.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickEventModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/components/paymentInfoLinkList.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/components/PaymentOrderSummary.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/TicketInsuranceConfirmation.jsx"
        ], 
        "type": "store", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/ConvictSetup.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/ConfigConstants.js"
        ], 
        "id": 53
    }, 
    {
        "name": "ModalManagerStore.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/stores/", 
        "nodemodules": [], 
        "links": [
            62, 
            39
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/IgnoreModalCheckbox.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/ModalManager.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomDialogsStore.js"
        ], 
        "type": "store", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/ModalManagerConstants.js"
        ], 
        "id": 54
    }, 
    {
        "name": "ExperimentsStore.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/stores/", 
        "nodemodules": [], 
        "links": [
            33, 
            62
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/example/components/ExperimentsExamplePage.jsx"
        ], 
        "type": "store", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/ExperimentsConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js"
        ], 
        "id": 55
    }, 
    {
        "name": "RouterStore.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/stores/", 
        "nodemodules": [], 
        "links": [
            41
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/RouterHandlerMixin.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/RouterActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/App.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/components/SignUpFormChildren.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/ReviewOrderModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickPriceLevelModule.jsx"
        ], 
        "type": "store", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/RouterConstants.js"
        ], 
        "id": 56
    }, 
    {
        "name": "FormStore.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/stores/", 
        "nodemodules": [], 
        "links": [
            38, 
            62, 
            82, 
            51, 
            63
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserServerRecordStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormChildren.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormChildrenToggle.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldCreditCardExpDate.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldCountries.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldGenerator.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/components/SignUpFormChildren.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/components/SignUpOrderSummary.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/CustomerInformation.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/PreOrderInfo.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/components/PaymentOrderSummary.jsx"
        ], 
        "type": "store", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/FormConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/InputActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/InputStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/FormValidation.js"
        ], 
        "id": 57
    }, 
    {
        "name": "PageLayoutStore.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/stores/", 
        "nodemodules": [], 
        "links": [
            37, 
            62
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageLayout.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Layout.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/layouts/index.js", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/layouts/index.js", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/layouts/index.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/layouts/index.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/layouts/index.js", 
            "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/layouts/index.js", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/layouts/index.js"
        ], 
        "type": "store", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageLayoutConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js"
        ], 
        "id": 58
    }, 
    {
        "name": "IntlStore.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/stores/", 
        "nodemodules": [], 
        "links": [
            35, 
            87, 
            273, 
            271
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UserSessionActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/OrderApi.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/WebApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/LocaleSwitcher.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/IntlApp.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/EventSelectorCalendar.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/example/components/IntlExamplePage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/components/paymentInfoLinkList.jsx"
        ], 
        "type": "store", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/IntlConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/IntlActions.js", 
            "/home/felix/work/eventshopper/eventshopper/resources/locales/en.json", 
            "/home/felix/work/eventshopper/eventshopper/resources/locales/en-US.json"
        ], 
        "id": 59
    }, 
    {
        "name": "truncate.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/utils/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 60
    }, 
    {
        "name": "FormValidationTools.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/utils/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/FormValidation.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 61
    }, 
    {
        "name": "debug.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/utils/", 
        "nodemodules": [
            "path", 
            "debug"
        ], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/ProcessOrderStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/ProcessOrderStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/actions/CartActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/actions/ProcessOrderActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/actions/ProcessOrderActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserServerRecordStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserSessionStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserSessionStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UserSessionActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UserSessionActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UsersChoicesActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/RouterHandlerMixin.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments/OptimizelyApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments/Experiment.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments/Experiment.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments/asyncActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments/OptimizelyExperiment.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/InputStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ConfigStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ModalManagerStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ExperimentsStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/FormStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/PageLayoutStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/BackendApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/MockApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/RouterActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/UserActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/TimerActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Timer.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/UpsellModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/actions/SearchActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/actions/StockPileActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/actions/ConfirmationActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/actions/ConfirmationActions.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 62
    }, 
    {
        "name": "FormValidation.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/utils/", 
        "nodemodules": [
            "lgtm"
        ], 
        "links": [
            72, 
            51, 
            34, 
            61
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/FormStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldCreditCardExpDate.jsx"
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/creditCard.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/InputStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/InputConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/FormValidationTools.js"
        ], 
        "id": 63
    }, 
    {
        "name": "convertData.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/utils/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 64
    }, 
    {
        "name": "BackendApi.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/utils/", 
        "nodemodules": [
            "superagent"
        ], 
        "links": [
            71, 
            62, 
            53, 
            67
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/OrderApi.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/WebApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/utils/WaitingRoomApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/utils/StockPileApi.js"
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/BackendApi_superagent-legacyIESupport.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/envConfig.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ConfigStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/MockApi.js"
        ], 
        "id": 65
    }, 
    {
        "name": "OrderApi.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/utils/", 
        "nodemodules": [], 
        "links": [
            65, 
            59, 
            81, 
            184, 
            13, 
            88, 
            36
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/BackendApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/IntlStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/RouterActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/actions/SearchActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/actions/CartActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/ModalManagerActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js"
        ], 
        "id": 66
    }, 
    {
        "name": "MockApi.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/utils/", 
        "nodemodules": [
            "superagent"
        ], 
        "links": [
            62
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/BackendApi.js"
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js"
        ], 
        "id": 67
    }, 
    {
        "name": "RouterPages.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/utils/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/RouterHandlerMixin.jsx"
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/routes.js"
        ], 
        "id": 68
    }, 
    {
        "name": "RouterContainer.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/utils/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/index.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/RouterActions.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 69
    }, 
    {
        "name": "dateParser.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/utils/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/order/utils/processOrderMapper.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/utils/seriesMapper.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 70
    }, 
    {
        "name": "BackendApi_superagent-legacyIESupport.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/utils/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/BackendApi.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 71
    }, 
    {
        "name": "creditCard.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/utils/", 
        "nodemodules": [], 
        "links": [
            29
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/InputStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/FormValidation.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldGenerator.jsx"
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/CreditCard.js"
        ], 
        "id": 72
    }, 
    {
        "name": "ConvictSetup.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/utils/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ConfigStore.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 73
    }, 
    {
        "name": "IntlApi.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/utils/", 
        "nodemodules": [
            "superagent"
        ], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/IntlActions.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 74
    }, 
    {
        "name": "ConfigApi.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/utils/", 
        "nodemodules": [
            "superagent"
        ], 
        "links": [
            53
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js"
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ConfigStore.js"
        ], 
        "id": 75
    }, 
    {
        "name": "WebApi.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/utils/", 
        "nodemodules": [], 
        "links": [
            65, 
            17, 
            19, 
            212, 
            6, 
            59, 
            51, 
            18, 
            53
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/order/actions/CartActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/actions/ProcessOrderActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UserSessionActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/TimerActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/actions/SearchActions.js"
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/BackendApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserSessionStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/IntlStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/InputStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserServerRecordStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ConfigStore.js"
        ], 
        "id": 76
    }, 
    {
        "name": "production.json", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/envConfig/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 77
    }, 
    {
        "name": "index.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/envConfig/", 
        "nodemodules": [
            "fs"
        ], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 78
    }, 
    {
        "name": "development.json", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/envConfig/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 79
    }, 
    {
        "name": "PageLayoutActions.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/actions/", 
        "nodemodules": [], 
        "links": [
            37
        ], 
        "type": "action", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageLayoutConstants.js"
        ], 
        "id": 80
    }, 
    {
        "name": "RouterActions.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/actions/", 
        "nodemodules": [], 
        "links": [
            41, 
            62, 
            56, 
            69
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/index.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/OrderApi.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageHeader.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/components/SignUpFormChildren.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/components/SignUpOrderSummary.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/CustomerInformation.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/VerifyPurchasePage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/DeliveryOrderSummary.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/ReviewOrderSummary.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/TicketSearchPage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/components/PaymentOrderSummary.jsx"
        ], 
        "type": "action", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/RouterConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/RouterStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/RouterContainer.js"
        ], 
        "id": 81
    }, 
    {
        "name": "InputActions.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/actions/", 
        "nodemodules": [], 
        "links": [
            34
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/FormStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/DebugToolbar.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldStates.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldCreditCardExpDate.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldCountries.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldGenerator.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/components/SignUpFormChildren.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/components/SignUpOrderSummary.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/PreOrderInfo.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/components/PaymentInformationForms.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/components/PaymentOrderSummary.jsx"
        ], 
        "type": "action", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/InputConstants.js"
        ], 
        "id": 82
    }, 
    {
        "name": "UserActions.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/actions/", 
        "nodemodules": [], 
        "links": [
            62, 
            31, 
            159, 
            6, 
            21, 
            13
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserSessionStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/RouterHandlerMixin.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/DebugToolbar.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/VerifyPurchasePage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/mixins/WaitingRoomDialogsMixin.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/ItsYourTurn.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/TicketSearchPage.jsx"
        ], 
        "type": "action", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/UserConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/actions/WaitingRoomActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UserSessionActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/actions/CartActions.js"
        ], 
        "id": 83
    }, 
    {
        "name": "FormActions.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/actions/", 
        "nodemodules": [], 
        "links": [
            38
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/DebugToolbar.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormChildrenToggle.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldCreditCardExpDate.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageHeader.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldCountries.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldGenerator.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/components/SignUpFormChildren.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/CustomerInformation.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/VerifyPurchasePage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/PreOrderInfo.jsx"
        ], 
        "type": "action", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/FormConstants.js"
        ], 
        "id": 84
    }, 
    {
        "name": "ExperimentsActions.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/actions/", 
        "nodemodules": [], 
        "links": [
            33
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments/asyncActions.js"
        ], 
        "type": "action", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/ExperimentsConstants.js"
        ], 
        "id": 85
    }, 
    {
        "name": "TimerActions.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/actions/", 
        "nodemodules": [], 
        "links": [
            62, 
            30, 
            19, 
            76, 
            52
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageHeader.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Timer.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/example/components/ExampleModals.jsx"
        ], 
        "type": "action", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/TimerConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserSessionStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/WebApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/TimerStore.js"
        ], 
        "id": 86
    }, 
    {
        "name": "IntlActions.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/actions/", 
        "nodemodules": [], 
        "links": [
            35, 
            74
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/IntlStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/LocaleSwitcher.jsx"
        ], 
        "type": "action", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/IntlConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/IntlApi.js"
        ], 
        "id": 87
    }, 
    {
        "name": "ModalManagerActions.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/actions/", 
        "nodemodules": [], 
        "links": [
            39
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/OrderApi.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/IgnoreModalCheckbox.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageHeader.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/ModalManager.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/VerifyPurchasePage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/DeliveryOrderSummary.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/UpsellModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/mixins/WaitingRoomDialogsMixin.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/ItsYourTurn.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/TicketSearchPage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/InvitesDescription.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/example/components/ExampleModals.jsx"
        ], 
        "type": "action", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/ModalManagerConstants.js"
        ], 
        "id": 88
    }, 
    {
        "name": "index.js", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/flux/", 
        "nodemodules": [
            "mcfly"
        ], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 89
    }, 
    {
        "name": "DebugToolbar.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "classnames"
        ], 
        "links": [
            82, 
            84, 
            38, 
            83, 
            155, 
            52, 
            53
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/InputActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/FormActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/FormConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/UserActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/TimerStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ConfigStore.js"
        ], 
        "id": 90
    }, 
    {
        "name": "GroupMinMaxDisplayer.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [], 
        "id": 91
    }, 
    {
        "name": "ModulePriceLevels.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react", 
            "classnames"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [], 
        "id": 92
    }, 
    {
        "name": "FormFieldStates.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            51, 
            82
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/InputStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/InputActions.js"
        ], 
        "id": 93
    }, 
    {
        "name": "FormChildren.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            57
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/FormStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js"
        ], 
        "id": 94
    }, 
    {
        "name": "InputProp.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [], 
        "id": 95
    }, 
    {
        "name": "NumberSelector.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            25, 
            32
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/NumberSelectorMixin.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/NumberSelectorConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/NumberSelectorDropdown.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/NumberSelectorRadios.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/NumberSelectorFancy.js"
        ], 
        "id": 96
    }, 
    {
        "name": "FormChildrenToggle.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            57, 
            84, 
            38
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/FormStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/FormActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/FormConstants.js"
        ], 
        "id": 97
    }, 
    {
        "name": "IgnoreModalCheckbox.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            88, 
            54
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/ModalManagerActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ModalManagerStore.js"
        ], 
        "id": 98
    }, 
    {
        "name": "FormFieldCreditCardExpDate.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            38, 
            63, 
            155, 
            51, 
            57, 
            82, 
            84
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/FormConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/FormValidation.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/InputStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/FormStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/InputActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/FormActions.js"
        ], 
        "id": 99
    }, 
    {
        "name": "NumberSelectorRadios.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            25
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/NumberSelectorMixin.js"
        ], 
        "id": 100
    }, 
    {
        "name": "ModuleDropdown.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react", 
            "classnames"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [], 
        "id": 101
    }, 
    {
        "name": "PageLayout.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            58, 
            52
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/PageLayoutStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Layout.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/TimerStore.js"
        ], 
        "id": 102
    }, 
    {
        "name": "PageHeader.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            88, 
            86, 
            184, 
            13, 
            84, 
            38, 
            81, 
            36, 
            52, 
            53
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Timer.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/IgnoreModalCheckbox.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/ModalManagerActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/TimerActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/actions/SearchActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/actions/CartActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/FormActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/FormConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/RouterActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/LocaleSwitcher.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/TimerStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ConfigStore.js"
        ], 
        "id": 103
    }, 
    {
        "name": "FormFieldCountries.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            51, 
            57, 
            84, 
            82
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/InputStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/FormStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/FormActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/InputActions.js"
        ], 
        "id": 104
    }, 
    {
        "name": "LocaleSwitcher.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            59, 
            87
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/IntlStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/IntlActions.js"
        ], 
        "id": 105
    }, 
    {
        "name": "Module.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "classnames", 
            "react"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [], 
        "id": 106
    }, 
    {
        "name": "PageFooter.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            53
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ConfigStore.js"
        ], 
        "id": 107
    }, 
    {
        "name": "IntlApp.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            59
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/App.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/IntlStore.js"
        ], 
        "id": 108
    }, 
    {
        "name": "HTMLMessage.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [], 
        "id": 109
    }, 
    {
        "name": "ModalManager.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [], 
        "links": [
            54, 
            88, 
            6, 
            5
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ModalManagerStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/ModalManagerActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/ProcessOrderStore.js"
        ], 
        "id": 110
    }, 
    {
        "name": "FormFieldGenerator.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            72, 
            34, 
            57, 
            51, 
            82, 
            84, 
            53
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/creditCard.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/InputConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/FormStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/InputStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/InputActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/FormActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ConfigStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormCreditCardHighlight.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldCreditCardExpDate.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldCountries.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldStates.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormChildrenToggle.js"
        ], 
        "id": 111
    }, 
    {
        "name": "App.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            56
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageHeader.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageFooter.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/ModalManager.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/RouterStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/envConfig.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/DebugToolbar.js"
        ], 
        "id": 112
    }, 
    {
        "name": "FormParent.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            38
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/FormConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormChildren.js", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/components/SignUpFormChildren.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldGenerator.js"
        ], 
        "id": 113
    }, 
    {
        "name": "LoadingOverlay.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            53
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ConfigStore.js"
        ], 
        "id": 114
    }, 
    {
        "name": "Timer.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "classnames", 
            "react"
        ], 
        "links": [
            52, 
            86, 
            62
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/TimerStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/TimerActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js"
        ], 
        "id": 115
    }, 
    {
        "name": "NumberSelectorFancy.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [], 
        "links": [
            25
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/NumberSelectorMixin.js"
        ], 
        "id": 116
    }, 
    {
        "name": "LoadingBar.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [], 
        "id": 117
    }, 
    {
        "name": "FormCreditCardHighlight.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            51
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/InputStore.js"
        ], 
        "id": 118
    }, 
    {
        "name": "Layout.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            58
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/PageLayoutStore.js"
        ], 
        "id": 119
    }, 
    {
        "name": "NumberSelectorDropdown.jsx", 
        "parent": "common", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/common/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            25
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/NumberSelectorMixin.js"
        ], 
        "id": 120
    }, 
    {
        "name": "index.js", 
        "parent": "signup", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/signup/layouts/", 
        "nodemodules": [], 
        "links": [
            58, 
            36, 
            122
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/PageLayoutStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/components/SignUpOrderSummary.js", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/components/SignUpModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/layouts/signuppage/default.json"
        ], 
        "id": 121
    }, 
    {
        "name": "default.json", 
        "parent": "layouts", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/signup/layouts/signuppage/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/signup/layouts/index.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 122
    }, 
    {
        "name": "SignUpModule.jsx", 
        "parent": "signup", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/signup/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormParent.js"
        ], 
        "id": 123
    }, 
    {
        "name": "SignUpFormChildren.jsx", 
        "parent": "signup", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/signup/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            57, 
            84, 
            82, 
            81, 
            36, 
            38, 
            17, 
            56, 
            159, 
            37
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/FormStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/FormActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/InputActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/RouterActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/FormConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/RouterStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/actions/WaitingRoomActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageLayoutConstants.js"
        ], 
        "id": 124
    }, 
    {
        "name": "SignUpPage.jsx", 
        "parent": "signup", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/signup/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            36
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageLayout.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/RouterHandlerMixin.js"
        ], 
        "id": 125
    }, 
    {
        "name": "SignUpOrderSummary.jsx", 
        "parent": "signup", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/signup/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            81, 
            36, 
            82, 
            57, 
            38
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/OrderSummaryModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/RouterActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/InputActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/FormStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/FormConstants.js"
        ], 
        "id": 126
    }, 
    {
        "name": "index.js", 
        "parent": "verifypurchase", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/layouts/", 
        "nodemodules": [], 
        "links": [
            58, 
            36, 
            128
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/PageLayoutStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/OrderSummaryModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/VerifyOrderSummary.js", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/CustomerInformation.js", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/SeatsLocation.js", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/VerifyOrderSummary.js", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/TicketInsurance.js", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/layouts/default.json"
        ], 
        "id": 127
    }, 
    {
        "name": "default.json", 
        "parent": "verifypurchase", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/layouts/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/layouts/index.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 128
    }, 
    {
        "name": "SeatsLocation.jsx", 
        "parent": "verifypurchase", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            212, 
            17, 
            6
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/envConfig.js"
        ], 
        "id": 129
    }, 
    {
        "name": "VerifyOrderSummary.jsx", 
        "parent": "verifypurchase", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            14
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/order/actions/ProcessOrderActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/OrderSummaryModule.js"
        ], 
        "id": 130
    }, 
    {
        "name": "TicketInsurance.jsx", 
        "parent": "verifypurchase", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            53, 
            17, 
            22, 
            6, 
            51
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ConfigStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UsersChoicesActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/InputStore.js"
        ], 
        "id": 131
    }, 
    {
        "name": "CustomerInformation.jsx", 
        "parent": "verifypurchase", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/", 
        "nodemodules": [], 
        "links": [
            36, 
            81, 
            57, 
            84, 
            38, 
            51
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/RouterActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/FormStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/FormActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/FormConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/InputStore.js"
        ], 
        "id": 132
    }, 
    {
        "name": "VerifyPurchasePage.jsx", 
        "parent": "verifypurchase", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            36, 
            38, 
            4, 
            84, 
            83, 
            81, 
            88, 
            5
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageLayout.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/RouterHandlerMixin.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/LoadingOverlay.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/FormConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/constants/ProcessOrderConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/FormActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/UserActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/RouterActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/ModalManagerActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/ProcessOrderStore.js"
        ], 
        "id": 133
    }, 
    {
        "name": "index.js", 
        "parent": "revieworder", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/revieworder/layouts/", 
        "nodemodules": [], 
        "links": [
            58, 
            36, 
            136, 
            135
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/PageLayoutStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/OrderSummaryModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/ReviewOrderModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/ReviewOrderSummary.js", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/DeliveryMethodModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/PriceTypeChoiceModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/UpsellModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/DeliveryOrderSummary.js", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/layouts/ticketreviewpage/default.json", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/layouts/deliverymethodpage/default.json"
        ], 
        "id": 134
    }, 
    {
        "name": "default.json", 
        "parent": "layouts", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/revieworder/layouts/deliverymethodpage/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/layouts/index.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 135
    }, 
    {
        "name": "default.json", 
        "parent": "layouts", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/revieworder/layouts/ticketreviewpage/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/layouts/index.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 136
    }, 
    {
        "name": "DeliveryMethodPage.jsx", 
        "parent": "revieworder", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            36
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageLayout.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/RouterHandlerMixin.js"
        ], 
        "id": 137
    }, 
    {
        "name": "PriceTypeChoiceModule.jsx", 
        "parent": "revieworder", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/", 
        "nodemodules": [], 
        "links": [
            6
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/PriceTypeChooser.js"
        ], 
        "id": 138
    }, 
    {
        "name": "DeliveryOrderSummary.jsx", 
        "parent": "revieworder", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            6, 
            36, 
            81, 
            212, 
            88, 
            17, 
            22
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/OrderSummaryModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/RouterActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/ModalManagerActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UsersChoicesActions.js"
        ], 
        "id": 139
    }, 
    {
        "name": "UpsellModule.jsx", 
        "parent": "revieworder", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            6, 
            17, 
            32, 
            13, 
            88, 
            22, 
            62
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/NumberSelector.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/NumberSelectorConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/actions/CartActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/GroupMinMaxDisplayer.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/ModalManagerActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UsersChoicesActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/InputProp.js"
        ], 
        "id": 140
    }, 
    {
        "name": "TicketReviewPage.jsx", 
        "parent": "revieworder", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            36
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageLayout.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/RouterHandlerMixin.js"
        ], 
        "id": 141
    }, 
    {
        "name": "PriceTypeChooser.jsx", 
        "parent": "revieworder", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/", 
        "nodemodules": [], 
        "links": [
            13
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/order/actions/CartActions.js"
        ], 
        "id": 142
    }, 
    {
        "name": "OrderSummaryModule.jsx", 
        "parent": "revieworder", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/", 
        "nodemodules": [], 
        "links": [
            6
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js"
        ], 
        "id": 143
    }, 
    {
        "name": "ReviewOrderSummary.jsx", 
        "parent": "revieworder", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            81, 
            36
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/OrderSummaryModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/RouterActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js"
        ], 
        "id": 144
    }, 
    {
        "name": "DeliveryMethodModule.jsx", 
        "parent": "revieworder", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/", 
        "nodemodules": [
            "classnames"
        ], 
        "links": [
            6, 
            13
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/actions/CartActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/OrderApi.js"
        ], 
        "id": 145
    }, 
    {
        "name": "ReviewOrderModule.jsx", 
        "parent": "revieworder", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            6, 
            17, 
            212, 
            36, 
            5, 
            56
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/EventDate.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/ProcessOrderStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/RouterStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/OrderApi.js"
        ], 
        "id": 146
    }, 
    {
        "name": "WaitingRoomDialogsMixin.jsx", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/mixins/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            83, 
            88, 
            148, 
            16, 
            169
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/UserActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/ModalManagerActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/constants/WaitingRoomConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/constants/UserSessionConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/EnterPromoCode.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomOpen.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/EnteringWaitingRoom.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/ItsYourTurn.js"
        ], 
        "id": 147
    }, 
    {
        "name": "WaitingRoomConstants.js", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/constants/", 
        "nodemodules": [
            "keymirror"
        ], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/mixins/WaitingRoomDialogsMixin.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomDialogsStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/actions/WaitingRoomServerActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/actions/WaitingRoomActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomPage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/ItsYourTurn.jsx"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 148
    }, 
    {
        "name": "index.js", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/layouts/", 
        "nodemodules": [], 
        "links": [
            58, 
            37, 
            154, 
            153, 
            150, 
            151
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/PageLayoutStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageLayoutConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/PurchaseFlowModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomWelcomeModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/MessageCenter.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/PreOrderInfo.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/DiscoverModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/MoreInfoModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/MoreDatesModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/layouts/waitingroompage/picktickets.json", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/layouts/waitingroompage/form.json", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/layouts/waitingroompage/discover.json", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/layouts/waitingroompage/signup.json"
        ], 
        "id": 149
    }, 
    {
        "name": "discover.json", 
        "parent": "layouts", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/layouts/waitingroompage/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/layouts/index.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 150
    }, 
    {
        "name": "signup.json", 
        "parent": "layouts", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/layouts/waitingroompage/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/layouts/index.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 151
    }, 
    {
        "name": "default.json", 
        "parent": "layouts", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/layouts/waitingroompage/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 152
    }, 
    {
        "name": "form.json", 
        "parent": "layouts", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/layouts/waitingroompage/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/layouts/index.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 153
    }, 
    {
        "name": "picktickets.json", 
        "parent": "layouts", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/layouts/waitingroompage/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/layouts/index.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 154
    }, 
    {
        "name": "WaitingRoomStore.js", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/", 
        "nodemodules": [], 
        "links": [
            62, 
            62, 
            75, 
            53, 
            148, 
            158, 
            220, 
            36, 
            81, 
            56, 
            37, 
            84, 
            38, 
            21
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UserSessionActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/RouterHandlerMixin.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/DebugToolbar.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormFieldCreditCardExpDate.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomDialogsStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomPage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomPagePhaseD.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomPagePhaseC.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/MessageCenter.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomPagePhaseE.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/EnteringWaitingRoom.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/PreOrderInfo.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomPagePhaseB.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/PurchaseFlowModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomOpen.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomPagePhaseA.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/ItsYourTurn.jsx"
        ], 
        "type": "store", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/envConfig.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/ConfigApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ConfigStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/constants/WaitingRoomConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/actions/WaitingRoomServerActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/actions/StockPileActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/RouterActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/RouterStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageLayoutConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/FormActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/FormConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UserSessionActions.js"
        ], 
        "id": 155
    }, 
    {
        "name": "WaitingRoomDialogsStore.js", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/", 
        "nodemodules": [], 
        "links": [
            148, 
            39, 
            16, 
            54, 
            19, 
            155, 
            212
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomPagePhaseD.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomPagePhaseC.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomPagePhaseB.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomPagePhaseA.jsx"
        ], 
        "type": "store", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/constants/WaitingRoomConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/ModalManagerConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/constants/UserSessionConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ModalManagerStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserSessionStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js"
        ], 
        "id": 156
    }, 
    {
        "name": "WaitingRoomApi.js", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/utils/", 
        "nodemodules": [], 
        "links": [
            65
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/actions/WaitingRoomServerActions.js"
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/BackendApi.js"
        ], 
        "id": 157
    }, 
    {
        "name": "WaitingRoomServerActions.js", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/actions/", 
        "nodemodules": [], 
        "links": [
            157, 
            148
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js"
        ], 
        "type": "action", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/utils/WaitingRoomApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/constants/WaitingRoomConstants.js"
        ], 
        "id": 158
    }, 
    {
        "name": "WaitingRoomActions.js", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/actions/", 
        "nodemodules": [], 
        "links": [
            148
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/UserActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/signup/components/SignUpFormChildren.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomPage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/PreOrderInfo.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/ItsYourTurn.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickPriceLevelModule.jsx"
        ], 
        "type": "action", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/constants/WaitingRoomConstants.js"
        ], 
        "id": 159
    }, 
    {
        "name": "WaitingRoomWelcomeModule.jsx", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [], 
        "id": 160
    }, 
    {
        "name": "WaitingRoomLoading.jsx", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [], 
        "id": 161
    }, 
    {
        "name": "EnterPromoCode.jsx", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            22
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UsersChoicesActions.js"
        ], 
        "id": 162
    }, 
    {
        "name": "DiscoverModule.jsx", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js"
        ], 
        "id": 163
    }, 
    {
        "name": "WaitingRoomPage.jsx", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            159, 
            148, 
            155
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/RouterHandlerMixin.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/actions/WaitingRoomActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/constants/WaitingRoomConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomPagePhaseA.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomPagePhaseB.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomPagePhaseC.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomPagePhaseD.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomPagePhaseE.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomLoading.js"
        ], 
        "id": 164
    }, 
    {
        "name": "WaitingRoomPagePhaseD.jsx", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            155, 
            156, 
            19
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomDialogsStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/mixins/WaitingRoomDialogsMixin.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomWelcomeModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserSessionStore.js"
        ], 
        "id": 165
    }, 
    {
        "name": "WaitingRoomPagePhaseC.jsx", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            156, 
            155, 
            19
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomDialogsStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/mixins/WaitingRoomDialogsMixin.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageLayout.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserSessionStore.js"
        ], 
        "id": 166
    }, 
    {
        "name": "MessageCenter.jsx", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            212, 
            155
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/LoadingBar.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js"
        ], 
        "id": 167
    }, 
    {
        "name": "WaitingRoomPagePhaseE.jsx", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            155
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomWelcomeModule.js"
        ], 
        "id": 168
    }, 
    {
        "name": "EnteringWaitingRoom.jsx", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            155
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/mixins/WaitingRoomDialogsMixin.jsx"
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js"
        ], 
        "id": 169
    }, 
    {
        "name": "PreOrderInfo.jsx", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            212, 
            17, 
            155, 
            82, 
            57, 
            51, 
            159, 
            38, 
            38, 
            84, 
            37
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PriceRange.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/InputActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/FormStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/InputStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/actions/WaitingRoomActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/FormConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/FormConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/FormActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageLayoutConstants.js"
        ], 
        "id": 170
    }, 
    {
        "name": "PurchaseFlowModuleElement.jsx", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [], 
        "id": 171
    }, 
    {
        "name": "WaitingRoomPagePhaseB.jsx", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            156, 
            155
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomDialogsStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/mixins/WaitingRoomDialogsMixin.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageLayout.js"
        ], 
        "id": 172
    }, 
    {
        "name": "PurchaseFlowModule.jsx", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            37, 
            155
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageLayoutConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/PurchaseFlowModuleElement.js"
        ], 
        "id": 173
    }, 
    {
        "name": "WaitingRoomOpen.jsx", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            155
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js"
        ], 
        "id": 174
    }, 
    {
        "name": "WaitingRoomPagePhaseA.jsx", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            156, 
            155, 
            212
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomDialogsStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/mixins/WaitingRoomDialogsMixin.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomWelcomeModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js"
        ], 
        "id": 175
    }, 
    {
        "name": "registry.js", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/", 
        "nodemodules": [], 
        "links": [], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/MessageCenter.js"
        ], 
        "id": 176
    }, 
    {
        "name": "ItsYourTurn.jsx", 
        "parent": "waitingroom", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            159, 
            148, 
            155, 
            19, 
            21, 
            16, 
            88, 
            83
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/actions/WaitingRoomActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/constants/WaitingRoomConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/HTMLMessage.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserSessionStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UserSessionActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/constants/UserSessionConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/ModalManagerActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/UserActions.js"
        ], 
        "id": 177
    }, 
    {
        "name": "SearchConstants.js", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/constants/", 
        "nodemodules": [
            "keymirror"
        ], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/TimerStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/stores/SearchDialogsStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/actions/SearchActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/TicketSearchPage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 178
    }, 
    {
        "name": "EventSelectorConstants.js", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/constants/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/utils/Tools.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/EventSelector.jsx"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 179
    }, 
    {
        "name": "index.js", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/layouts/", 
        "nodemodules": [], 
        "links": [
            58, 
            36, 
            181
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/PageLayoutStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/SelectedEventModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickEventModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickNumberOfTicketsModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickNumberOfInvitesModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickPriceLevelModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/VenueMapModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/MoreInfoModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/MoreDatesModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/layouts/ticketsearchpage/default.json"
        ], 
        "id": 180
    }, 
    {
        "name": "default.json", 
        "parent": "layouts", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/layouts/ticketsearchpage/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/layouts/index.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 181
    }, 
    {
        "name": "SearchDialogsStore.js", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/stores/", 
        "nodemodules": [], 
        "links": [
            178, 
            39
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/TicketSearchPage.jsx"
        ], 
        "type": "store", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/constants/SearchConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/ModalManagerConstants.js"
        ], 
        "id": 182
    }, 
    {
        "name": "Tools.js", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/utils/", 
        "nodemodules": [], 
        "links": [
            179
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/constants/EventSelectorConstants.js"
        ], 
        "id": 183
    }, 
    {
        "name": "SearchActions.js", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/actions/", 
        "nodemodules": [], 
        "links": [
            62, 
            178, 
            3, 
            76, 
            6
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/OrderApi.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageHeader.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickPriceLevelModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/components/PaymentOrderSummary.jsx"
        ], 
        "type": "action", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/constants/SearchConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/constants/CartConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/WebApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js"
        ], 
        "id": 184
    }, 
    {
        "name": "EventSummary.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/EventDate.js"
        ], 
        "id": 185
    }, 
    {
        "name": "EventSelectorScrollPane.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "classnames", 
            "react"
        ], 
        "links": [
            212
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js"
        ], 
        "id": 186
    }, 
    {
        "name": "EventSelector.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            179
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/constants/EventSelectorConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/EventSelectorScrollPane.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/EventSelectorCalendar.js"
        ], 
        "id": 187
    }, 
    {
        "name": "PriceLevelTooltip.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [], 
        "links": [], 
        "type": "component", 
        "requires": [], 
        "id": 188
    }, 
    {
        "name": "AcceptSplitSeats.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            17, 
            22
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UsersChoicesActions.js"
        ], 
        "id": 189
    }, 
    {
        "name": "EventSelectorCalendar.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "classnames", 
            "react", 
            "moment"
        ], 
        "links": [
            59, 
            212
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/IntlStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js"
        ], 
        "id": 190
    }, 
    {
        "name": "TicketSearchPage.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            83, 
            81, 
            36, 
            88, 
            6, 
            182, 
            178, 
            17, 
            19, 
            16, 
            212
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/UserActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/RouterActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageLayout.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/LoadingOverlay.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/RouterHandlerMixin.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/ModalManagerActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/stores/SearchDialogsStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/constants/SearchConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/InvalidAccessCode.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserSessionStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/constants/UserSessionConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js"
        ], 
        "id": 191
    }, 
    {
        "name": "PriceTable.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            17
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PriceTableEntry.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/FindBestPriceTableEntry.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js"
        ], 
        "id": 192
    }, 
    {
        "name": "SelectedEventModule.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            212, 
            17
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/EventSummary.js"
        ], 
        "id": 193
    }, 
    {
        "name": "FindBestPriceTableEntry.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "classnames", 
            "react"
        ], 
        "links": [
            22, 
            17
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UsersChoicesActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PriceLevelTooltip.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PriceLevelDetails.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PriceRange.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js"
        ], 
        "id": 194
    }, 
    {
        "name": "InvitesDescription.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            88
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/ModalManagerActions.js"
        ], 
        "id": 195
    }, 
    {
        "name": "PriceRange.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [], 
        "id": 196
    }, 
    {
        "name": "PickEventModule.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            212, 
            17, 
            22, 
            53
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UsersChoicesActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/EventSelector.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ConfigStore.js"
        ], 
        "id": 197
    }, 
    {
        "name": "EventDate.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [], 
        "id": 198
    }, 
    {
        "name": "MoreInfoModule.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            212, 
            17
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js"
        ], 
        "id": 199
    }, 
    {
        "name": "MoreDatesModule.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [], 
        "id": 200
    }, 
    {
        "name": "VenueMapModule.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "react", 
            "path"
        ], 
        "links": [
            212, 
            17
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/envConfig.js"
        ], 
        "id": 201
    }, 
    {
        "name": "PriceLevelDetailsItem.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PriceRange.js"
        ], 
        "id": 202
    }, 
    {
        "name": "PriceLevelDetails.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "react", 
            "classnames"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PriceLevelDetailsItem.js"
        ], 
        "id": 203
    }, 
    {
        "name": "PriceTableEntry.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "classnames", 
            "color", 
            "react"
        ], 
        "links": [
            22, 
            17, 
            212
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UsersChoicesActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PriceRange.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PriceLevelTooltip.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PriceLevelDetails.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/GeneralAdmissionMessage.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js"
        ], 
        "id": 204
    }, 
    {
        "name": "InvalidAccessCode.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            21, 
            19
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UserSessionActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserSessionStore.js"
        ], 
        "id": 205
    }, 
    {
        "name": "GeneralAdmissionMessage.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [], 
        "id": 206
    }, 
    {
        "name": "registry.js", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [], 
        "links": [], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickEventModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickPriceLevelModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickNumberOfTicketsModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/VenueMapModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/SelectedEventSummary.js"
        ], 
        "id": 207
    }, 
    {
        "name": "PickNumberOfInvitesModule.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            32, 
            212, 
            17, 
            22
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/NumberSelector.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/NumberSelectorConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UsersChoicesActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/InvitesDescription.js"
        ], 
        "id": 208
    }, 
    {
        "name": "PickNumberOfTicketsModule.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            212, 
            22, 
            17
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/ModuleDropdown.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/NumberSelector.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UsersChoicesActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js"
        ], 
        "id": 209
    }, 
    {
        "name": "PickPriceLevelModule.jsx", 
        "parent": "picktickets", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            212, 
            17, 
            184, 
            56, 
            159, 
            36, 
            37
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/ModulePriceLevels.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/actions/SearchActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PriceTable.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/AcceptSplitSeats.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/RouterStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/actions/WaitingRoomActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageLayoutConstants.js"
        ], 
        "id": 210
    }, 
    {
        "name": "StockPileConstants.js", 
        "parent": "stockpile", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/stockpile/constants/", 
        "nodemodules": [
            "keymirror"
        ], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/actions/StockPileActions.js"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 211
    }, 
    {
        "name": "StockPileStore.js", 
        "parent": "stockpile", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/", 
        "nodemodules": [], 
        "links": [
            211, 
            220, 
            214, 
            62, 
            62, 
            213, 
            215, 
            53, 
            17, 
            22, 
            178, 
            19, 
            21, 
            16, 
            75
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/RouterHandlerMixin.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/WebApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/SeatsLocation.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/DeliveryOrderSummary.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/ReviewOrderModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomDialogsStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/MessageCenter.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/PreOrderInfo.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/components/WaitingRoomPagePhaseA.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/EventSelectorScrollPane.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/EventSelectorCalendar.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/TicketSearchPage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/SelectedEventModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickEventModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/MoreInfoModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/VenueMapModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PriceTableEntry.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickNumberOfInvitesModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickNumberOfTicketsModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PickPriceLevelModule.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/example/components/ExampleModals.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/components/PaymentInformationForms.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/PrintReceipt.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/EventInfo.jsx"
        ], 
        "type": "store", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/constants/StockPileConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/actions/StockPileActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/utils/StockPileApi.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/utils/seriesMapper.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/utils/pricesMapper.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ConfigStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UsersChoicesActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/constants/SearchConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserSessionStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/actions/UserSessionActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/constants/UserSessionConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/ConfigApi.js"
        ], 
        "id": 212
    }, 
    {
        "name": "seriesMapper.js", 
        "parent": "stockpile", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/stockpile/utils/", 
        "nodemodules": [
            "path"
        ], 
        "links": [
            70, 
            17
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js"
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/dateParser.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js"
        ], 
        "id": 213
    }, 
    {
        "name": "StockPileApi.js", 
        "parent": "stockpile", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/stockpile/utils/", 
        "nodemodules": [], 
        "links": [
            65
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js"
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/BackendApi.js"
        ], 
        "id": 214
    }, 
    {
        "name": "pricesMapper.js", 
        "parent": "stockpile", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/stockpile/utils/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 215
    }, 
    {
        "name": "seriesInfoEvents.json", 
        "parent": "__tests__", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/stockpile/utils/__tests__/fixtures/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 216
    }, 
    {
        "name": "priceTable.json", 
        "parent": "__tests__", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/stockpile/utils/__tests__/fixtures/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 217
    }, 
    {
        "name": "layoutInfo.json", 
        "parent": "__tests__", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/stockpile/utils/__tests__/fixtures/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 218
    }, 
    {
        "name": "seriesInfo.json", 
        "parent": "__tests__", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/stockpile/utils/__tests__/fixtures/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 219
    }, 
    {
        "name": "StockPileActions.js", 
        "parent": "stockpile", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/stockpile/actions/", 
        "nodemodules": [], 
        "links": [
            211, 
            62
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UserSessionStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/waitingroom/stores/WaitingRoomStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js"
        ], 
        "type": "action", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/constants/StockPileConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js"
        ], 
        "id": 220
    }, 
    {
        "name": "routes.jsx", 
        "parent": "js", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/example/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/example/components/Examples.js", 
            "/home/felix/work/eventshopper/eventshopper/js/example/components/IntlExamplePage.js", 
            "/home/felix/work/eventshopper/eventshopper/js/example/components/ExampleModals.js", 
            "/home/felix/work/eventshopper/eventshopper/js/example/components/ExampleForms.js", 
            "/home/felix/work/eventshopper/eventshopper/js/example/components/ExampleNumberSelector.js", 
            "/home/felix/work/eventshopper/eventshopper/js/example/components/ExperimentsExamplePage.js"
        ], 
        "id": 221
    }, 
    {
        "name": "ExampleConstants.js", 
        "parent": "example", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/example/constants/", 
        "nodemodules": [
            "keymirror"
        ], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/experiments/ExperimentEventFactory.js", 
            "/home/felix/work/eventshopper/eventshopper/js/example/stores/ExampleStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/example/actions/ExampleActions.js"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 222
    }, 
    {
        "name": "ExampleStore.js", 
        "parent": "example", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/example/stores/", 
        "nodemodules": [], 
        "links": [
            222
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/example/components/ExampleText.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/example/components/Cart.jsx"
        ], 
        "type": "store", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/example/constants/ExampleConstants.js"
        ], 
        "id": 223
    }, 
    {
        "name": "ExampleActions.js", 
        "parent": "example", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/example/actions/", 
        "nodemodules": [], 
        "links": [
            222
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/example/components/ExperimentsExamplePage.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/example/components/ExampleTextInput.jsx", 
            "/home/felix/work/eventshopper/eventshopper/js/example/components/ExamplePage.jsx"
        ], 
        "type": "action", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/example/constants/ExampleConstants.js"
        ], 
        "id": 224
    }, 
    {
        "name": "ExampleText.jsx", 
        "parent": "example", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/example/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            223
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/example/stores/ExampleStore.js"
        ], 
        "id": 225
    }, 
    {
        "name": "Examples.jsx", 
        "parent": "example", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/example/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [], 
        "id": 226
    }, 
    {
        "name": "Cart.jsx", 
        "parent": "example", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/example/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            223
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/example/stores/ExampleStore.js"
        ], 
        "id": 227
    }, 
    {
        "name": "ExperimentsExamplePage.jsx", 
        "parent": "example", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/example/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            33, 
            55, 
            224
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/ExperimentsConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ExperimentsStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/example/actions/ExampleActions.js"
        ], 
        "id": 228
    }, 
    {
        "name": "ExampleNumberSelector.jsx", 
        "parent": "example", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/example/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            32
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/NumberSelector.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/NumberSelectorConstants.js"
        ], 
        "id": 229
    }, 
    {
        "name": "ExampleModals.jsx", 
        "parent": "example", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/example/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            88, 
            212, 
            17, 
            86
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/components/PriceTable.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/IgnoreModalCheckbox.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/ModalManagerActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/TimerActions.js"
        ], 
        "id": 230
    }, 
    {
        "name": "ExampleTextInput.jsx", 
        "parent": "example", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/example/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            224
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/example/actions/ExampleActions.js"
        ], 
        "id": 231
    }, 
    {
        "name": "IntlExamplePage.jsx", 
        "parent": "example", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/example/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            59
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/IntlStore.js"
        ], 
        "id": 232
    }, 
    {
        "name": "ExampleForms.jsx", 
        "parent": "example", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/example/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [], 
        "id": 233
    }, 
    {
        "name": "ExamplePage.jsx", 
        "parent": "example", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/example/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            224, 
            26
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/example/components/ExampleText.js", 
            "/home/felix/work/eventshopper/eventshopper/js/example/components/ExampleTextInput.js", 
            "/home/felix/work/eventshopper/eventshopper/js/example/actions/ExampleActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/example/components/Cart.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/SetIntervalMixin.js"
        ], 
        "id": 234
    }, 
    {
        "name": "index.js", 
        "parent": "paymentinformation", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/layouts/", 
        "nodemodules": [], 
        "links": [
            58, 
            36, 
            236
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/PageLayoutStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/components/PaymentOrderSummary.js", 
            "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/components/PaymentInformationForms.js", 
            "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/components/paymentInfoLinkList.js", 
            "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/layouts/paymentinformationpage/default.json"
        ], 
        "id": 235
    }, 
    {
        "name": "default.json", 
        "parent": "layouts", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/layouts/paymentinformationpage/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/layouts/index.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 236
    }, 
    {
        "name": "PaymentInformationPage.jsx", 
        "parent": "paymentinformation", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            36
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageLayout.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/RouterHandlerMixin.js"
        ], 
        "id": 237
    }, 
    {
        "name": "PaymentInformationForms.jsx", 
        "parent": "paymentinformation", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            212, 
            82, 
            51
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/FormParent.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/InputActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/InputStore.js"
        ], 
        "id": 238
    }, 
    {
        "name": "paymentInfoLinkList.jsx", 
        "parent": "paymentinformation", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            53, 
            59
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ConfigStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/IntlStore.js"
        ], 
        "id": 239
    }, 
    {
        "name": "PaymentOrderSummary.jsx", 
        "parent": "paymentinformation", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/paymentinformation/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            81, 
            57, 
            82, 
            36, 
            53, 
            184, 
            38
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/OrderSummaryModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/RouterActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/FormStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/actions/InputActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ConfigStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/picktickets/actions/SearchActions.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/FormConstants.js"
        ], 
        "id": 240
    }, 
    {
        "name": "ConfirmationConstants.js", 
        "parent": "confirmation", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/confirmation/constants/", 
        "nodemodules": [
            "keymirror"
        ], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/ProcessOrderStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/actions/ConfirmationActions.js"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 241
    }, 
    {
        "name": "index.js", 
        "parent": "confirmation", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/confirmation/layouts/", 
        "nodemodules": [], 
        "links": [
            58, 
            36, 
            243
        ], 
        "type": "other", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/PageLayoutStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/OrderSummaryModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/OrderSummaryConfirmation.js", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/PurchaseConfirmation.js", 
            "/home/felix/work/eventshopper/eventshopper/js/verifypurchase/components/SeatsLocation.js", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/WhatNext.js", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/EventInfo.js", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/PrintReceipt.js", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/TicketInsuranceConfirmation.js", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/layouts/confirmation/default.json"
        ], 
        "id": 242
    }, 
    {
        "name": "default.json", 
        "parent": "layouts", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/confirmation/layouts/confirmation/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/layouts/index.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 243
    }, 
    {
        "name": "ConfirmationActions.js", 
        "parent": "confirmation", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/confirmation/actions/", 
        "nodemodules": [], 
        "links": [
            62, 
            62, 
            241
        ], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/PurchaseConfirmation.jsx"
        ], 
        "type": "action", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/flux.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/debug.js", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/constants/ConfirmationConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/utils/OrderApi.js"
        ], 
        "id": 244
    }, 
    {
        "name": "TicketInsuranceConfirmation.jsx", 
        "parent": "confirmation", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            53, 
            17, 
            6
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/ConfigStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js"
        ], 
        "id": 245
    }, 
    {
        "name": "ConfirmationPage.jsx", 
        "parent": "confirmation", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            36
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/PageLayout.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/constants/PageConstants.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/mixins/RouterHandlerMixin.js"
        ], 
        "id": 246
    }, 
    {
        "name": "WhatNext.jsx", 
        "parent": "confirmation", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js"
        ], 
        "id": 247
    }, 
    {
        "name": "OrderSummaryConfirmation.jsx", 
        "parent": "confirmation", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/OrderSummaryModule.js"
        ], 
        "id": 248
    }, 
    {
        "name": "PrintReceipt.jsx", 
        "parent": "confirmation", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/", 
        "nodemodules": [], 
        "links": [
            212, 
            17, 
            51, 
            6, 
            5
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/InputStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/revieworder/components/OrderSummaryModule.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/ProcessOrderStore.js"
        ], 
        "id": 249
    }, 
    {
        "name": "EventInfo.jsx", 
        "parent": "confirmation", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            212, 
            17
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js", 
            "/home/felix/work/eventshopper/eventshopper/js/stockpile/stores/StockPileStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/user/stores/UsersChoicesStore.js"
        ], 
        "id": 250
    }, 
    {
        "name": "SeatLocation.jsx", 
        "parent": "confirmation", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js"
        ], 
        "id": 251
    }, 
    {
        "name": "PurchaseConfirmation.jsx", 
        "parent": "confirmation", 
        "root": "/home/felix/work/eventshopper/eventshopper/js/confirmation/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            6, 
            51, 
            5, 
            244
        ], 
        "type": "component", 
        "requires": [
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/CartStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/InputStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/common/components/Module.js", 
            "/home/felix/work/eventshopper/eventshopper/js/order/stores/ProcessOrderStore.js", 
            "/home/felix/work/eventshopper/eventshopper/js/confirmation/actions/ConfirmationActions.js"
        ], 
        "id": 252
    }, 
    {
        "name": "webapi.clearOrder.json", 
        "parent": "resources", 
        "root": "/home/felix/work/eventshopper/eventshopper/resources/mockdata/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 253
    }, 
    {
        "name": "showshop.priceTableW.json", 
        "parent": "resources", 
        "root": "/home/felix/work/eventshopper/eventshopper/resources/mockdata/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 254
    }, 
    {
        "name": "showshop.seriesInfoW.json", 
        "parent": "resources", 
        "root": "/home/felix/work/eventshopper/eventshopper/resources/mockdata/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 255
    }, 
    {
        "name": "session.get.json", 
        "parent": "resources", 
        "root": "/home/felix/work/eventshopper/eventshopper/resources/mockdata/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 256
    }, 
    {
        "name": "webapi.getMoreTimeAll.json", 
        "parent": "resources", 
        "root": "/home/felix/work/eventshopper/eventshopper/resources/mockdata/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 257
    }, 
    {
        "name": "showshop.getOnsaleInfo.json", 
        "parent": "resources", 
        "root": "/home/felix/work/eventshopper/eventshopper/resources/mockdata/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 258
    }, 
    {
        "name": "enternl.json", 
        "parent": "resources", 
        "root": "/home/felix/work/eventshopper/eventshopper/resources/mockdata/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 259
    }, 
    {
        "name": "webapi.sessionCreateW.json", 
        "parent": "resources", 
        "root": "/home/felix/work/eventshopper/eventshopper/resources/mockdata/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 260
    }, 
    {
        "name": "showshop.availWSS.json", 
        "parent": "resources", 
        "root": "/home/felix/work/eventshopper/eventshopper/resources/mockdata/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 261
    }, 
    {
        "name": "webapi.insurancePricing.json", 
        "parent": "resources", 
        "root": "/home/felix/work/eventshopper/eventshopper/resources/mockdata/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 262
    }, 
    {
        "name": "webapi.amodsell.json", 
        "parent": "resources", 
        "root": "/home/felix/work/eventshopper/eventshopper/resources/mockdata/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 263
    }, 
    {
        "name": "events.json", 
        "parent": "resources", 
        "root": "/home/felix/work/eventshopper/eventshopper/resources/mockdata/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 264
    }, 
    {
        "name": "getPhase.json", 
        "parent": "resources", 
        "root": "/home/felix/work/eventshopper/eventshopper/resources/mockdata/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 265
    }, 
    {
        "name": "webapi.searchSeats2.json", 
        "parent": "resources", 
        "root": "/home/felix/work/eventshopper/eventshopper/resources/mockdata/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 266
    }, 
    {
        "name": "order.ack.json", 
        "parent": "resources", 
        "root": "/home/felix/work/eventshopper/eventshopper/resources/mockdata/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 267
    }, 
    {
        "name": "webapi.updateShoppingUnit.json", 
        "parent": "resources", 
        "root": "/home/felix/work/eventshopper/eventshopper/resources/mockdata/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 268
    }, 
    {
        "name": "fr-FR.json", 
        "parent": "resources", 
        "root": "/home/felix/work/eventshopper/eventshopper/resources/locales/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 269
    }, 
    {
        "name": "fr.json", 
        "parent": "resources", 
        "root": "/home/felix/work/eventshopper/eventshopper/resources/locales/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 270
    }, 
    {
        "name": "en-US.json", 
        "parent": "resources", 
        "root": "/home/felix/work/eventshopper/eventshopper/resources/locales/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/IntlStore.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 271
    }, 
    {
        "name": "en-CA.json", 
        "parent": "resources", 
        "root": "/home/felix/work/eventshopper/eventshopper/resources/locales/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 272
    }, 
    {
        "name": "en.json", 
        "parent": "resources", 
        "root": "/home/felix/work/eventshopper/eventshopper/resources/locales/", 
        "nodemodules": [], 
        "links": [], 
        "requiredby": [
            "/home/felix/work/eventshopper/eventshopper/js/common/stores/IntlStore.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 273
    }, 
    {
        "name": "fr-CA.json", 
        "parent": "resources", 
        "root": "/home/felix/work/eventshopper/eventshopper/resources/locales/", 
        "nodemodules": [], 
        "links": [], 
        "type": "other", 
        "requires": [], 
        "id": 274
    }
]
},{}],2:[function(require,module,exports){
;(function(root, factory) {

  // Support AMD
  if (typeof define === 'function' && define.amd) {
    define([], factory);

  // Support CommonJS
  } else if (typeof exports === 'object') {
    var randomColor = factory();
    
    // Support NodeJS & Component, which allow module.exports to be a function
    if (typeof module === 'object' && module && module.exports) {
      exports = module.exports = randomColor;
    }
    
    // Support CommonJS 1.1.1 spec
    exports.randomColor = randomColor;
  
  // Support vanilla script loading
  } else {
    root.randomColor = factory();
  };

}(this, function() {

  // Seed to get repeatable colors
  var seed = null;

  // Shared color dictionary
  var colorDictionary = {};

  // Populate the color dictionary
  loadColorBounds();

  var randomColor = function(options) {
    if (options.seed && !seed) seed = options.seed;
    options = options || {};

    var H,S,B;

    // Check if we need to generate multiple colors
    if (options.count != null) {

      var totalColors = options.count,
          colors = [];

      options.count = null;

      while (totalColors > colors.length) {
        colors.push(randomColor(options));
      }

      options.count = totalColors;

      //Keep the seed constant between runs. 
      if (options.seed) seed = options.seed;
      
      return colors;
    }

    // First we pick a hue (H)
    H = pickHue(options);

    // Then use H to determine saturation (S)
    S = pickSaturation(H, options);

    // Then use S and H to determine brightness (B).
    B = pickBrightness(H, S, options);

    // Then we return the HSB color in the desired format
    return setFormat([H,S,B], options);
  };

  function pickHue (options) {

    var hueRange = getHueRange(options.hue),
        hue = randomWithin(hueRange);

    // Instead of storing red as two seperate ranges,
    // we group them, using negative numbers
    if (hue < 0) {hue = 360 + hue}

    return hue;

  }

  function pickSaturation (hue, options) {

    if (options.luminosity === 'random') {
      return randomWithin([0,100]);
    }

    if (options.hue === 'monochrome') {
      return 0;
    }

    var saturationRange = getSaturationRange(hue);

    var sMin = saturationRange[0],
        sMax = saturationRange[1];

    switch (options.luminosity) {

      case 'bright':
        sMin = 55;
        break;

      case 'dark':
        sMin = sMax - 10;
        break;

      case 'light':
        sMax = 55;
        break;
   }

    return randomWithin([sMin, sMax]);

  }

  function pickBrightness (H, S, options) {

    var brightness,
        bMin = getMinimumBrightness(H, S),
        bMax = 100;

    switch (options.luminosity) {

      case 'dark':
        bMax = bMin + 20;
        break;

      case 'light':
        bMin = (bMax + bMin)/2;
        break;

      case 'random':
        bMin = 0;
        bMax = 100;
        break;
    }

    return randomWithin([bMin, bMax]);

  }

  function setFormat (hsv, options) {

    switch (options.format) {

      case 'hsvArray':
        return hsv;

      case 'hslArray':
        return HSVtoHSL(hsv);

      case 'hsl':
        var hsl = HSVtoHSL(hsv);
        return 'hsl('+hsl[0]+', '+hsl[1]+'%, '+hsl[2]+'%)';

      case 'rgbArray':
        return HSVtoRGB(hsv);

      case 'rgb':
        var rgb = HSVtoRGB(hsv);
        return 'rgb(' + rgb.join(', ') + ')';

      default:
        return HSVtoHex(hsv);
    }

  }

  function getMinimumBrightness(H, S) {

    var lowerBounds = getColorInfo(H).lowerBounds;

    for (var i = 0; i < lowerBounds.length - 1; i++) {

      var s1 = lowerBounds[i][0],
          v1 = lowerBounds[i][1];

      var s2 = lowerBounds[i+1][0],
          v2 = lowerBounds[i+1][1];

      if (S >= s1 && S <= s2) {

         var m = (v2 - v1)/(s2 - s1),
             b = v1 - m*s1;

         return m*S + b;
      }

    }

    return 0;
  }

  function getHueRange (colorInput) {

    if (typeof parseInt(colorInput) === 'number') {

      var number = parseInt(colorInput);

      if (number < 360 && number > 0) {
        return [number, number];
      }

    }

    if (typeof colorInput === 'string') {

      if (colorDictionary[colorInput]) {
        var color = colorDictionary[colorInput];
        if (color.hueRange) {return color.hueRange}
      }
    }

    return [0,360];

  }

  function getSaturationRange (hue) {
    return getColorInfo(hue).saturationRange;
  }

  function getColorInfo (hue) {

    // Maps red colors to make picking hue easier
    if (hue >= 334 && hue <= 360) {
      hue-= 360;
    }

    for (var colorName in colorDictionary) {
       var color = colorDictionary[colorName];
       if (color.hueRange &&
           hue >= color.hueRange[0] &&
           hue <= color.hueRange[1]) {
          return colorDictionary[colorName];
       }
    } return 'Color not found';
  }

  function randomWithin (range) {
    if (seed == null) {
      return Math.floor(range[0] + Math.random()*(range[1] + 1 - range[0]));
    } else {
      //Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
      var max = range[1] || 1;
      var min = range[0] || 0;
      seed = (seed * 9301 + 49297) % 233280;
      var rnd = seed / 233280.0;
      return Math.floor(min + rnd * (max - min));
    }
  }

  function HSVtoHex (hsv){

    var rgb = HSVtoRGB(hsv);

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    var hex = "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);

    return hex;

  }

  function defineColor (name, hueRange, lowerBounds) {

    var sMin = lowerBounds[0][0],
        sMax = lowerBounds[lowerBounds.length - 1][0],

        bMin = lowerBounds[lowerBounds.length - 1][1],
        bMax = lowerBounds[0][1];

    colorDictionary[name] = {
      hueRange: hueRange,
      lowerBounds: lowerBounds,
      saturationRange: [sMin, sMax],
      brightnessRange: [bMin, bMax]
    };

  }

  function loadColorBounds () {

    defineColor(
      'monochrome',
      null,
      [[0,0],[100,0]]
    );

    defineColor(
      'red',
      [-26,18],
      [[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]
    );

    defineColor(
      'orange',
      [19,46],
      [[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]
    );

    defineColor(
      'yellow',
      [47,62],
      [[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]
    );

    defineColor(
      'green',
      [63,178],
      [[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]
    );

    defineColor(
      'blue',
      [179, 257],
      [[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]
    );

    defineColor(
      'purple',
      [258, 282],
      [[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]
    );

    defineColor(
      'pink',
      [283, 334],
      [[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]
    );

  }

  function HSVtoRGB (hsv) {

    // this doesn't work for the values of 0 and 360
    // here's the hacky fix
    var h = hsv[0];
    if (h === 0) {h = 1}
    if (h === 360) {h = 359}

    // Rebase the h,s,v values
    h = h/360;
    var s = hsv[1]/100,
        v = hsv[2]/100;

    var h_i = Math.floor(h*6),
      f = h * 6 - h_i,
      p = v * (1 - s),
      q = v * (1 - f*s),
      t = v * (1 - (1 - f)*s),
      r = 256,
      g = 256,
      b = 256;

    switch(h_i) {
      case 0: r = v, g = t, b = p;  break;
      case 1: r = q, g = v, b = p;  break;
      case 2: r = p, g = v, b = t;  break;
      case 3: r = p, g = q, b = v;  break;
      case 4: r = t, g = p, b = v;  break;
      case 5: r = v, g = p, b = q;  break;
    }
    var result = [Math.floor(r*255), Math.floor(g*255), Math.floor(b*255)];
    return result;
  }

  function HSVtoHSL (hsv) {
    var h = hsv[0],
      s = hsv[1]/100,
      v = hsv[2]/100,
      k = (2-s)*v;

    return [
      h,
      Math.round(s*v / (k<1 ? k : 2-k) * 10000) / 100,
      k/2 * 100
    ];
  }

  return randomColor;
}));

},{}],3:[function(require,module,exports){
var data = require("./app.json");
var randomcolor = require("randomcolor");

var graph = {
  nodes: [],
  links: []
};

var seengroups = {};

function pushLinks(t){
  graph.links.push({source: i, target: t, value: 1});
  
}
for(var i=0, l=data.length; i<l; i++){
  data[i].weight = 1;
  if(data[i].requiredby !== undefined){
    data[i].weight = data[i].requiredby.length + 1;
  }
  var color = null;
  if(!seengroups.hasOwnProperty(data[i].parent)){
    color = randomcolor({
      luminosity: 'dark',
      color: 'random'
    });
    seengroups[data[i].parent] = color;
  }
  else {
    color = seengroups[data[i].parent];
  }
  graph.nodes.push({name: data[i].name, group: data[i].parent, weight: data[i].weight, color: color});

  data[i].links.forEach(function(t){
    graph.links.push({source: i, target: t, value: 1});
  });
}


var width = 1600,
    height = 1600;

var color = d3.scale.category20();

var force = d3.layout.force()
      .charge(-120)
      .linkDistance(500)
      .size([width, height]);

var svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height);

var drawGraph = function(graph) {
  force
    .nodes(graph.nodes)
    .links(graph.links)
    .start();

  var link = svg.selectAll(".link")
        .data(graph.links)
        .enter().append("line")
        .attr("class", "link")
        .style("stroke-width", function(d) { return Math.sqrt(d.value); });

  var gnodes = svg.selectAll('g.gnode')
        .data(graph.nodes)
        .enter()
        .append('g')
        .classed('gnode', true);
  
  var node = gnodes.append("circle")
        .attr("class", "node")
        .attr("r", function(d) { return d.weight * 5; }) 
        .style("fill", function(d) {return d.color; })
        .style("width", 30)
        .call(force.drag);

  var labels = gnodes.append("text")
        .text(function(d) { return d.name; });

  
  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

    gnodes.attr("transform", function(d) { 
      return 'translate(' + [d.x, d.y] + ')'; 
    });
    
    
    
  });
};

drawGraph(graph);


},{"./app.json":1,"randomcolor":2}]},{},[3]);
