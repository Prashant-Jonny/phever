//Copyright (c) Microsoft Corporation.  All rights reserved.

#pragma once
#include "DXGISurface.h"

namespace  Microsoft { namespace WindowsAPICodePack { namespace DirectX { namespace DXGI {

using namespace System;

    /// <summary>
    /// The Surface1 interface extends the Surface by adding support for rendering to a DXGI interface using GDI.
    /// <para>(Also see DirectX SDK: IDXGISurface1)</para>
    /// </summary>
    public ref class Surface1 :
        public Microsoft::WindowsAPICodePack::DirectX::DXGI::Surface
    {
    public: 
        /// <summary>
        /// Returns a device context (DC) that allows you to render to a DXGI surface using GDI.
        /// <para>(Also see DirectX SDK: IDXGISurface1::GetDC)</para>
        /// </summary>
        /// <param name="Discard">If true the application will not preserve any rendering with GDI; otherwise, false.           If false, any previous rendering to the device context will be preserved.           This flag is ideal for simply reading the device context and not doing any rendering to the surface.</param>
        /// <returns>A HDC handle that represents the current device context for GDI rendering.</returns>
        IntPtr GetDC(Boolean Discard);

        /// <summary>
        /// Releases the GDI device context (DC) associated with the current surface and allows rendering using Direct3D.
        /// <para>(Also see DirectX SDK: IDXGISurface1::ReleaseDC)</para>
        /// </summary>
        /// <param name="DirtyRect">A RECT structure that identifies the dirty region of the surface.            A dirty region is any part of the surface that you have used for GDI rendering and that you want to preserve.           This is used as a performance hint to graphics subsystem in certain scenarios.           Do not use this parameter to restrict rendering to the specified rectangular region.           Passing in NULL causes the whole surface to be considered dirty.           Otherwise the area specified by the RECT will be used as a performance hint to indicate what areas have been manipulated by GDI rendering.</param>
        void ReleaseDC(D3dRect DirtyRect);
    internal:
        Surface1()
        {
        }
    internal:

        Surface1(IDXGISurface1* pNativeIDXGISurface1)
        {
            Attach(pNativeIDXGISurface1);
        }

    };
} } } }
