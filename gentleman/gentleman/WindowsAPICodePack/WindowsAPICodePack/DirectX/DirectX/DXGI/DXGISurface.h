//Copyright (c) Microsoft Corporation.  All rights reserved.

#pragma once
#include "DXGIDeviceSubObject.h"

namespace  Microsoft { namespace WindowsAPICodePack { namespace DirectX { namespace DXGI {

using namespace System;

    /// <summary>
    /// An Surface interface implements methods for image-data objects.
    /// <para>(Also see DirectX SDK: IDXGISurface)</para>
    /// </summary>
    public ref class Surface :
        public DeviceSubObject
    {
    public: 
        /// <summary>
        /// Get a description of the surface.
        /// <para>(Also see DirectX SDK: IDXGISurface::GetDesc)</para>
        /// </summary>
        property SurfaceDescription Description
        {
            SurfaceDescription  get();
        }

        /// <summary>
        /// Get the data contained in the surface, and deny GPU access to the surface.
        /// <para>(Also see DirectX SDK: IDXGISurface::Map)</para>
        /// </summary>
        /// <param name="flags">CPU read-write flags. These flags can be combined with a logical OR.</param>
        /// <returns>The surface data (see <see cref="MappedRect"/>)<seealso cref="MappedRect"/>.</returns>
        MappedRect Map(MapOption flags);

        /// <summary>
        /// Invalidate the pointer to the surface retrieved by Surface.Map and re-enable GPU access to the resource.
        /// <para>(Also see DirectX SDK: IDXGISurface::Unmap)</para>
        /// </summary>
        void Unmap();

    internal:
        Surface()
        {
        }
    internal:

        Surface(IDXGISurface* pNativeIDXGISurface)
        {
            Attach(pNativeIDXGISurface);
        }

    };
} } } }
