//Copyright (c) Microsoft Corporation.  All rights reserved.

#pragma once

#include "DirectUnknown.h"

using namespace System;
using namespace Microsoft::WindowsAPICodePack::DirectX;

namespace  Microsoft { namespace WindowsAPICodePack { namespace DirectX { namespace Direct3D11 {

ref class D3DDevice;

    /// <summary>
    /// A device-child interface accesses data used by a device.
    /// <para>(Also see DirectX SDK: ID3D11DeviceChild)</para>
    /// </summary>
    public ref class DeviceChild :
        public DirectUnknown
    {
    public: 
        /// <summary>
        /// Get the device that created this object.
        /// <para>(Also see DirectX SDK: ID3D11DeviceChild::GetDevice)</para>
        /// </summary>
        D3DDevice^ GetDevice();

    internal:
        DeviceChild()
        { }

    internal:
        DeviceChild(ID3D11DeviceChild* pNativeID3D11DeviceChild) : DirectUnknown(pNativeID3D11DeviceChild)
        { }

    };
} } } }
